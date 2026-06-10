# PublicAuth

## Overview

### Available Operations

* [getCurrentIdentity](#getcurrentidentity) - Get Current Public Developer Auth Identity
* [getPublicAuthSessionApiV2PublicAuthSessionGet](#getpublicauthsessionapiv2publicauthsessionget) - Get Current Public OAuth Session
* [switchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost](#switchpublicauthsessionworkspaceapiv2publicauthsessionswitchworkspacepost) - Switch Current Public OAuth Session Workspace
* [switchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost](#switchpublicauthmcpsessionworkspaceapiv2publicauthmcpsessionswitchworkspacepost) - Switch Current Public MCP OAuth Session Workspace
* [recordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost](#recordpublicauthmcptoolcallapiv2publicauthmcpsessiontoolcalllogpost) - Record Public MCP Tool Call
* [revokePublicAuthSessionApiV2PublicAuthSessionRevokePost](#revokepublicauthsessionapiv2publicauthsessionrevokepost) - Revoke Current Public OAuth Session

## getCurrentIdentity

Get Current Public Developer Auth Identity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_auth_whoami_api_v2_public_auth_whoami_get" method="get" path="/v2/public/auth/whoami" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.getCurrentIdentity();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthGetCurrentIdentity } from "sanka-sdk/funcs/public-auth-get-current-identity.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthGetCurrentIdentity(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthGetCurrentIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicAuthWhoamiApiV2PublicAuthWhoamiGetRequest](../../models/operations/get-public-auth-whoami-api-v2-public-auth-whoami-get-request.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicAuthWhoamiApiV2PublicAuthWhoamiGetResponse](../../models/operations/get-public-auth-whoami-api-v2-public-auth-whoami-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicAuthSessionApiV2PublicAuthSessionGet

Get Current Public OAuth Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_auth_session_api_v2_public_auth_session_get" method="get" path="/v2/public/auth/session" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.getPublicAuthSessionApiV2PublicAuthSessionGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthGetPublicAuthSessionApiV2PublicAuthSessionGet } from "sanka-sdk/funcs/public-auth-get-public-auth-session-api-v2-public-auth-session-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthGetPublicAuthSessionApiV2PublicAuthSessionGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthGetPublicAuthSessionApiV2PublicAuthSessionGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicAuthSessionApiV2PublicAuthSessionGetRequest](../../models/operations/get-public-auth-session-api-v2-public-auth-session-get-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicAuthSessionApiV2PublicAuthSessionGetResponse](../../models/operations/get-public-auth-session-api-v2-public-auth-session-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## switchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost

Switch Current Public OAuth Session Workspace

### Example Usage

<!-- UsageSnippet language="typescript" operationID="switch_public_auth_session_workspace_api_v2_public_auth_session_switch_workspace_post" method="post" path="/v2/public/auth/session/switch-workspace" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.switchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost({
    body: {
      workspaceId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import {
  publicAuthSwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost,
} from "sanka-sdk/funcs/public-auth-switch-public-auth-session-workspace-api-v2-public-auth-session-switch-workspace-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthSwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost(sanka, {
    body: {
      workspaceId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthSwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePostRequest](../../models/operations/switch-public-auth-session-workspace-api-v2-public-auth-session-switch-workspace-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[operations.SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePostResponse](../../models/operations/switch-public-auth-session-workspace-api-v2-public-auth-session-switch-workspace-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## switchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost

Switch Current Public MCP OAuth Session Workspace

### Example Usage

<!-- UsageSnippet language="typescript" operationID="switch_public_auth_mcp_session_workspace_api_v2_public_auth_mcp_session_switch_workspace_post" method="post" path="/v2/public/auth/mcp-session/switch-workspace" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.switchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost({
    body: {
      workspaceId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import {
  publicAuthSwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost,
} from "sanka-sdk/funcs/public-auth-switch-public-auth-mcp-session-workspace-api-v2-public-auth-mcp-session-switch-workspace-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthSwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost(sanka, {
    body: {
      workspaceId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthSwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                             | [operations.SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostRequest](../../models/operations/switch-public-auth-mcp-session-workspace-api-v2-public-auth-mcp-session-switch-workspace-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                        |
| `options.retries`                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                      |

### Response

**Promise\<[operations.SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostResponse](../../models/operations/switch-public-auth-mcp-session-workspace-api-v2-public-auth-mcp-session-switch-workspace-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## recordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost

Record Public MCP Tool Call

### Example Usage

<!-- UsageSnippet language="typescript" operationID="record_public_auth_mcp_tool_call_api_v2_public_auth_mcp_session_tool_call_log_post" method="post" path="/v2/public/auth/mcp-session/tool-call-log" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.recordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost({
    body: {
      toolName: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthRecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost } from "sanka-sdk/funcs/public-auth-record-public-auth-mcp-tool-call-api-v2-public-auth-mcp-session-tool-call-log-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthRecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost(sanka, {
    body: {
      toolName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthRecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostRequest](../../models/operations/record-public-auth-mcp-tool-call-api-v2-public-auth-mcp-session-tool-call-log-post-request.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostResponse](../../models/operations/record-public-auth-mcp-tool-call-api-v2-public-auth-mcp-session-tool-call-log-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## revokePublicAuthSessionApiV2PublicAuthSessionRevokePost

Revoke Current Public OAuth Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revoke_public_auth_session_api_v2_public_auth_session_revoke_post" method="post" path="/v2/public/auth/session/revoke" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.publicAuth.revokePublicAuthSessionApiV2PublicAuthSessionRevokePost();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthRevokePublicAuthSessionApiV2PublicAuthSessionRevokePost } from "sanka-sdk/funcs/public-auth-revoke-public-auth-session-api-v2-public-auth-session-revoke-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await publicAuthRevokePublicAuthSessionApiV2PublicAuthSessionRevokePost(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicAuthRevokePublicAuthSessionApiV2PublicAuthSessionRevokePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                         | [operations.RevokePublicAuthSessionApiV2PublicAuthSessionRevokePostRequest](../../models/operations/revoke-public-auth-session-api-v2-public-auth-session-revoke-post-request.md) | :heavy_check_mark:                                                                                                                                                                | The request object to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                         | RequestOptions                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                           | :heavy_minus_sign:                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.    |
| `options.retries`                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                  |

### Response

**Promise\<[operations.RevokePublicAuthSessionApiV2PublicAuthSessionRevokePostResponse](../../models/operations/revoke-public-auth-session-api-v2-public-auth-session-revoke-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |