import assert from 'node:assert/strict';
import test from 'node:test';
import Sanka, { HTTPClient } from '../esm/index.js';

const workspaceId = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const runId = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
const sourceSha256 = 'a'.repeat(64);
const body = { sourceId: runId, sourceSha256, maxCredits: 100, timeoutSeconds: 60 };
const wireBody = { source_id: runId, source_sha256: sourceSha256, max_credits: 100, timeout_seconds: 60 };
const envelope = data => ({ success: true, data, meta: { ctx_id: 'synthetic-sdk-test' } });
function client(response) {
  const requests = [];
  return {
    requests,
    sdk: new Sanka({ apiKey: 'synthetic-token', httpClient: new HTTPClient({ fetcher: async input => {
      const request = new Request(input);
      requests.push({ url: new URL(request.url), method: request.method, headers: request.headers, body: request.method === 'POST' ? await request.json() : undefined });
      return response();
    } }) }),
  };
}

test('generated create preserves source, cap, workspace and stable key', async () => {
  const { sdk, requests } = client(() => Response.json(envelope({
    id: runId, workspace_id: workspaceId, request: wireBody, billing_currency: 'USD',
    input_sha256: 'b'.repeat(64), status: 'queued', runner_image: 'image@sha256:' + 'c'.repeat(64),
    extension_sha256: 'd'.repeat(64), execution_budget_ms: 60000, created_at: '2026-09-08T00:00:00Z',
  }), { status: 201 }));
  const result = await sdk.developerCloud.createRun({ workspaceId, idempotencyKey: 'approved-sdk-001', body });
  assert.equal(result.result.data.status, 'queued');
  assert.equal(result.result.data.billingCurrency, 'USD');
  assert.equal(result.result.data.request.maxCredits, 100);
  assert.equal(requests[0].url.origin, 'https://api.sanka.com');
  assert.equal(requests[0].url.pathname, '/v2/migrate/cloud-runs');
  assert.equal(requests[0].url.searchParams.get('workspace_id'), workspaceId);
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer synthetic-token');
  assert.equal(requests[0].headers.get('Idempotency-Key'), 'approved-sdk-001');
  assert.deepEqual(requests[0].body, { ...wireBody, recipe: 'drf-to-fastapi', verification_profile: 'generated-tests-static-v1' });
});

test('availability remains readable with all paid features disabled', async () => {
  const { sdk, requests } = client(() => Response.json(envelope({ enabled: false, fleet_enabled: false, repair_enabled: false, certification_enabled: false })));
  const result = await sdk.developerCloud.getAvailability({ workspaceId });
  assert.equal(result.result.data.enabled, false);
  assert.equal(result.result.data.fleetEnabled, false);
  assert.equal(requests[0].method, 'GET');
});

test('selective retry retains selected keys, new budget and error without resubmission', async () => {
  const { sdk, requests } = client(() => Response.json({ success: false, error: { code: 'FLEET_RETRY_INVALID', message: 'Failed children only' }, meta: { ctx_id: 'synthetic' } }, { status: 409 }));
  await assert.rejects(sdk.developerCloud.retryFleet({ workspaceId, fleetId: runId, idempotencyKey: 'approved-retry-001', body: { itemKeys: ['failed-three'], maxCredits: 100, concurrency: 1 } }));
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url.pathname, `/v2/migrate/cloud-fleets/${runId}/retry`);
  assert.equal(requests[0].headers.get('Idempotency-Key'), 'approved-retry-001');
  assert.deepEqual(requests[0].body, { item_keys: ['failed-three'], max_credits: 100, concurrency: 1 });
});

test('artifact download preserves raw ZIP bytes', async () => {
  const bytes = Buffer.from([0x50, 0x4b, 0x03, 0x04, 0xff, 0x00]);
  const { sdk, requests } = client(() => new Response(bytes, { headers: { 'content-type': 'application/octet-stream' } }));
  const result = await sdk.developerCloud.getArtifact({ workspaceId, runId, name: 'output.zip' });
  assert.deepEqual(Buffer.from(await new Response(result.result).arrayBuffer()), bytes);
  assert.equal(requests[0].url.searchParams.get('workspace_id'), workspaceId);
});

test('certificate revocation sends only reviewed reason to the pinned run', async () => {
  const { sdk, requests } = client(() => Response.json({ success: false, error: { code: 'NOT_FOUND', message: 'No issued certificate' }, meta: { ctx_id: 'synthetic' } }, { status: 404 }));
  await assert.rejects(sdk.developerCloud.revokeCertificate({ workspaceId, runId, body: { reason: 'Candidate withdrawn' } }));
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url.pathname, `/v2/migrate/cloud-runs/${runId}/certificate/revoke`);
  assert.deepEqual(requests[0].body, { reason: 'Candidate withdrawn' });
});
