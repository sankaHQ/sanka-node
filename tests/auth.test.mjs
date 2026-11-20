import assert from 'node:assert/strict';
import test from 'node:test';
import Sanka, { HTTPClient } from '../esm/index.js';
import { resetEnv } from '../esm/lib/env.js';

async function authorizationSent(options, env) {
  const saved = { SANKA_API_KEY: process.env.SANKA_API_KEY, SANKA_BEARER_AUTH: process.env.SANKA_BEARER_AUTH };
  for (const name of Object.keys(saved)) {
    if (env[name] === undefined) delete process.env[name];
    else process.env[name] = env[name];
  }
  resetEnv();

  let authorization;
  try {
    const httpClient = new HTTPClient({ fetcher: async input => {
      authorization = new Request(input).headers.get('Authorization');
      return Response.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Invalid token' }, meta: { ctx_id: 'auth-test' } }, { status: 401 });
    } });
    await new Sanka({ ...options, httpClient }).publicAuth.getCurrentIdentity().catch(() => {});
  } finally {
    for (const [name, value] of Object.entries(saved)) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
    resetEnv();
  }
  return authorization;
}

test('new Sanka() reads SANKA_API_KEY when no key is passed', async () => {
  assert.equal(await authorizationSent({}, { SANKA_API_KEY: 'env-key' }), 'Bearer env-key');
});

test('SANKA_API_KEY wins over the older SANKA_BEARER_AUTH, which still works alone', async () => {
  assert.equal(await authorizationSent({}, { SANKA_API_KEY: 'env-key', SANKA_BEARER_AUTH: 'old-key' }), 'Bearer env-key');
  assert.equal(await authorizationSent({}, { SANKA_BEARER_AUTH: 'old-key' }), 'Bearer old-key');
});

test('a key passed to the constructor wins over the environment', async () => {
  const env = { SANKA_API_KEY: 'env-key', SANKA_BEARER_AUTH: 'old-key' };
  assert.equal(await authorizationSent({ apiKey: 'passed-key' }, env), 'Bearer passed-key');
  assert.equal(await authorizationSent({ bearerAuth: 'passed-key', apiKey: '' }, env), 'Bearer passed-key');
});
