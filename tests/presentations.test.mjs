import assert from 'node:assert/strict';
import test from 'node:test';
import Sanka, { HTTPClient } from '../esm/index.js';

const workspaceId = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const presentationId = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
const programId = 'cccccccc-cccc-4ccc-8ccc-cccccccccccc';
const exportId = 'dddddddd-dddd-4ddd-8ddd-dddddddddddd';
const envelope = data => ({ success: true, data, meta: { ctx_id: 'presentations-sdk-test' } });
const deck = { schema: 'sanka.deck/v1', page: { size: '16:9' }, theme: { id: 'sanka-paper' }, footer: { pageNumbers: true, text: 'Sanka' }, slides: [{ id: 's1', blocks: [{ type: 'heading', id: 'h1', level: 1, text: 'Q4 review' }, { type: 'text', id: 't1', markdown: '- Revenue up' }] }] };
const presentation = (overrides = {}) => ({ id: presentationId, workspaceId, product: 'flow', kind: 'presentation', title: 'Q4 review', revision: 3, deck, slideCount: 1, outline: '# Q4 review', updatedVia: 'api', appPath: `/docs?presentation=${presentationId}`, ...overrides });

function client(response) {
  const requests = [];
  const sdk = new Sanka({ apiKey: 'synthetic-token', httpClient: new HTTPClient({ fetcher: async input => {
    const request = new Request(input);
    const text = await request.text();
    requests.push({ url: new URL(request.url), method: request.method, headers: request.headers, body: text ? JSON.parse(text) : undefined });
    return response();
  } }) });
  return { sdk, requests };
}

test('generated create sends the deck unchanged and parses typed blocks', async () => {
  const { sdk, requests } = client(() => Response.json(envelope(presentation({ revision: 1 })), { status: 201 }));
  const result = await sdk.presentations.create({ workspaceId, body: { title: 'Q4 review', deck, sourceRef: 'crm:q4' } });
  const [heading, text] = result.result.data.deck.slides[0].blocks;
  assert.equal(heading.type, 'heading');
  assert.equal(text.markdown, '- Revenue up');
  assert.equal(requests[0].method, 'POST');
  assert.equal(requests[0].url.pathname, '/v2/public/documents/presentations');
  assert.equal(requests[0].url.searchParams.get('workspace_id'), workspaceId);
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer synthetic-token');
  assert.deepEqual(requests[0].body, { title: 'Q4 review', deck, sourceRef: 'crm:q4' });
});

test('generated update sends discriminated edit ops at the expected revision', async () => {
  const ops = [
    { op: 'set_title', title: 'Q4 board review' },
    { op: 'insert_blocks', slideId: 's1', after: 'h1', blocks: [{ type: 'callout', markdown: 'Ship it' }] },
    { op: 'delete_slides', slideIds: ['s9'] },
  ];
  const { sdk, requests } = client(() => Response.json(envelope(presentation({ revision: 4 }))));
  const result = await sdk.presentations.update({ workspaceId, presentationId, body: { expectedRevision: 3, ops } });
  assert.equal(result.result.data.revision, 4);
  assert.equal(requests[0].method, 'PATCH');
  assert.equal(requests[0].url.pathname, `/v2/public/documents/presentations/${presentationId}`);
  assert.deepEqual(requests[0].body, { expectedRevision: 3, ops });
});

test('a stale replace fails once with the revision conflict', async () => {
  const { sdk, requests } = client(() => Response.json({ success: false, error: { code: 'PRESENTATION_REVISION_CONFLICT', message: 'Revision 4 is current' }, meta: { ctx_id: 'presentations-sdk-test' } }, { status: 409 }));
  await assert.rejects(sdk.presentations.replace({ presentationId, body: { expectedRevision: 3, deck } }), error => error.statusCode === 409 && error.body.includes('PRESENTATION_REVISION_CONFLICT'));
  assert.equal(requests.length, 1);
  assert.equal(requests[0].method, 'PUT');
});

test('a block type from a newer server stays readable', async () => {
  const future = { ...deck, slides: [{ id: 's1', blocks: [{ type: 'chart', id: 'c1', series: [1, 2] }] }] };
  const { sdk } = client(() => Response.json(envelope(presentation({ deck: future }))));
  const result = await sdk.presentations.get({ presentationId });
  const [block] = result.result.data.deck.slides[0].blocks;
  assert.equal(block.isUnknown, true);
  assert.deepEqual(block.raw, { type: 'chart', id: 'c1', series: [1, 2] });
});

test('program exports use the program route and idempotency key', async () => {
  const queued = { id: exportId, documentId: presentationId, product: 'sanka', revision: 3, format: 'pdf', status: 'queued' };
  const { sdk, requests } = client(() => Response.json(envelope(queued), { status: 202 }));
  const result = await sdk.programPresentations.createExport({ workspaceId, programId, presentationId, idempotencyKey: 'q4-pdf', body: { format: 'pdf', includeNotes: false } });
  assert.equal(result.result.data.status, 'queued');
  assert.equal(requests[0].url.pathname, `/v2/public/ferry/programs/${programId}/presentations/${presentationId}/exports`);
  assert.equal(requests[0].headers.get('Idempotency-Key'), 'q4-pdf');
  assert.deepEqual(requests[0].body, { format: 'pdf', includeHidden: false, includeNotes: false });
});

test('export download preserves the raw file bytes', async () => {
  const bytes = Buffer.from([0x25, 0x50, 0x44, 0x46, 0x2d, 0xff, 0x00]);
  const { sdk, requests } = client(() => new Response(bytes, { headers: { 'content-type': 'application/pdf' } }));
  const result = await sdk.programPresentations.downloadExport({ workspaceId, programId, presentationId, exportId });
  assert.deepEqual(Buffer.from(await new Response(result.result).arrayBuffer()), bytes);
  assert.equal(requests[0].url.pathname, `/v2/public/ferry/programs/${programId}/presentations/${presentationId}/exports/${exportId}/download`);
});
