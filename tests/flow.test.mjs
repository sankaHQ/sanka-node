import assert from 'node:assert/strict';
import test from 'node:test';
import Sanka, { HTTPClient } from '../esm/index.js';

const workspaceId = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const requestId = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
const workflowId = 'cccccccc-cccc-4ccc-8ccc-cccccccccccc';
const planDigest = 'sha256:' + 'a'.repeat(64);
const envelope = data => ({ success: true, data, meta: { ctx_id: 'flow-sdk-test' } });

function client(data, status = 200) {
  const requests = [];
  const sdk = new Sanka({ apiKey: 'synthetic-token', httpClient: new HTTPClient({ fetcher: async input => {
    const request = new Request(input);
    requests.push({ url: new URL(request.url), method: request.method, headers: request.headers, body: request.method === 'POST' ? await request.json() : undefined });
    return Response.json(data, { status });
  } }) });
  return { sdk, requests };
}

test('generated template plan preserves scope, request identity and scalar values', async () => {
  const parameters = { interval_minutes: 90, invoice_due_days: 45, deal_stage_ids: ['closedwon'], updated_since: '2026-09-01' };
  const { sdk, requests } = client(envelope({ workspace_id: workspaceId, request_id: requestId, plan_digest: planDigest, template_id: 'billing.hubspot-deal-invoices', template_version: 1, operation: 'create', applicable: true, parameters, construction: 'inactive' }));
  const result = await sdk.workflows.planTemplate({ workspaceId, body: { requestId, templateId: 'billing.hubspot-deal-invoices', templateVersion: 1, parameters } });
  assert.equal(result.result.data.planDigest, planDigest);
  assert.deepEqual(result.result.data.parameters, parameters);
  assert.equal(requests[0].url.pathname, '/v2/public/workflows/templates/plan');
  assert.equal(requests[0].url.searchParams.get('workspace_id'), workspaceId);
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer synthetic-token');
  assert.deepEqual(requests[0].body, { request_id: requestId, template_id: 'billing.hubspot-deal-invoices', template_version: 1, parameters });
});

test('generated template use sends only the exact approved request and digest', async () => {
  const { sdk, requests } = client(envelope({ workspace_id: workspaceId, workflow_id: workflowId, request_id: requestId, plan_digest: planDigest, definition_digest: planDigest, status: 'already_constructed' }));
  const result = await sdk.workflows.useTemplate({ workspaceId, body: { requestId, planDigest } });
  assert.equal(result.result.data.status, 'already_constructed');
  assert.equal(result.result.data.definitionDigest, planDigest);
  assert.equal(requests.length, 1);
  assert.deepEqual(requests[0].body, { request_id: requestId, plan_digest: planDigest });
});

test('generated managed status retains independent settings and template baseline', async () => {
  const { sdk, requests } = client(envelope({ workspace_id: workspaceId, workflow_id: workflowId, status: 'managed', definition_digest: planDigest, parameters: { invoice_due_days: 45 }, template_parameters: { invoice_due_days: 30 }, available_operations: ['plan', 'construct'], active: false }));
  const result = await sdk.workflows.getFlow({ workspaceId, workflowId });
  assert.equal(result.result.data.parameters.invoice_due_days, 45);
  assert.equal(result.result.data.templateParameters.invoice_due_days, 30);
  assert.deepEqual(result.result.data.availableOperations, ['plan', 'construct']);
  assert.equal(requests[0].url.pathname, `/v2/public/workflows/${workflowId}/flow`);
});

test('stale construction fails without a second mutation', async () => {
  const { sdk, requests } = client({ success: false, error: { code: 'WORKFLOW_FLOW_CONFLICT', message: 'Review again', details: { reason: 'FLOW_TARGET_STALE' } }, meta: { ctx_id: 'flow-sdk-test' } }, 409);
  await assert.rejects(sdk.workflows.constructFlow({ workspaceId, workflowId, body: { planDigest, attemptId: requestId } }));
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url.pathname, `/v2/public/workflows/${workflowId}/flow/construct`);
  assert.deepEqual(requests[0].body, { plan_digest: planDigest, attempt_id: requestId });
});
