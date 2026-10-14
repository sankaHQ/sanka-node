import assert from 'node:assert/strict';
import test from 'node:test';
import Sanka, { HTTPClient } from '../esm/index.js';

const workspaceId = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const lane = { id: 'lane', type: 'section', position: { x: 0, y: 0 }, width: 2720, height: 240, data: { label: 'HubSpot', description: '', color: 'default', fontSize: 30, fillColor: '#FFFFFF', strokeColor: '#DCDCD8' } };
const start = { id: 'start', type: 'process', position: { x: 40, y: 85 }, width: 290, height: 115, data: { label: '依頼', description: '', color: 'default', shape: 'pill', fontSize: 26, fillColor: '#F3E8FF', strokeColor: '#7C3AED', textColor: '#5B21B6' } };
const result = { id: 'result', type: 'process', position: { x: 400, y: 85 }, data: { label: '結果' } };
const returned = { id: 'returned', source: 'result', target: 'start', label: '結果を戻す\n（最大15分間隔）', strokeStyle: 'dashed', strokeColor: '#6B6B70', fontSize: 22, targetArrow: true };

test('sections, pills, colors, font sizes and dashed connectors reach the API and come back', async () => {
  const requests = [];
  const sdk = new Sanka({ apiKey: 'synthetic-token', httpClient: new HTTPClient({ fetcher: async input => {
    const request = new Request(input);
    const body = JSON.parse(await request.text());
    requests.push(body);
    return Response.json({ success: true, data: { ...body, id: 'diagram-1', workspaceId, revision: 1, viewport: { x: 0, y: 0, zoom: 1 } }, meta: { ctx_id: 'diagrams-sdk-test' } });
  } }) });

  const response = await sdk.ferryDiagrams.createPublicFerryDiagramApiV2PublicFerryDiagramsPost({ workspaceId, body: { name: 'Lanes', nodes: [lane, start, result], edges: [returned] } });

  const [sent] = requests;
  assert.deepEqual(sent.nodes[0], lane);
  assert.deepEqual(sent.nodes[1], start);
  for (const [key, value] of Object.entries(returned)) assert.deepEqual(sent.edges[0][key], value, key);
  const saved = response.result.data;
  assert.equal(saved.nodes[0].type, 'section');
  assert.equal(saved.nodes[0].width, 2720);
  assert.equal(saved.nodes[1].data.shape, 'pill');
  assert.equal(saved.nodes[1].data.textColor, '#5B21B6');
  assert.equal(saved.edges[0].strokeStyle, 'dashed');
  assert.equal(saved.edges[0].fontSize, 22);
});

test('the diagram image comes back as the raw PNG bytes with its revision header', async () => {
  const png = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0xff]);
  class PngResponse extends Response {
    async json() { throw new Error('the PNG body was parsed as JSON'); }
    async text() { throw new Error('the PNG body was read as text'); }
  }
  const requests = [];
  const sdk = new Sanka({ apiKey: 'synthetic-token', httpClient: new HTTPClient({ fetcher: async input => {
    requests.push(new Request(input));
    return new PngResponse(png, { headers: { 'content-type': 'image/png', 'x-sanka-diagram-revision': '7' } });
  } }) });

  const image = await sdk.ferryDiagrams.getPublicFerryDiagramImage({ diagramId: 'diagram-1', workspaceId });

  assert.deepEqual(Buffer.from(await new Response(image.result).arrayBuffer()), png);
  assert.deepEqual(image.headers['x-sanka-diagram-revision'], ['7']);
  const [request] = requests;
  const url = new URL(request.url);
  assert.equal(request.method, 'GET');
  assert.equal(url.pathname, '/v2/public/ferry/diagrams/diagram-1/image');
  assert.equal(url.searchParams.get('workspace_id'), workspaceId);
  assert.equal(request.headers.get('Accept'), 'image/png');
});
