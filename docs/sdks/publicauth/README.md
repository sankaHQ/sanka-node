# PublicAuth

## Overview

### Available Operations

* [getCurrentIdentity](#getcurrentidentity) - Get Current Public Auth Identity

## getCurrentIdentity

Get Current Public Auth Identity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_public_auth_api_get_public_auth_whoami" method="get" path="/v1/public/auth/whoami" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
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
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicAuthWhoamiResponse](../../models/public-auth-whoami-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.PublicAuthErrorResponse | 401                            | application/json               |
| errors.PublicAuthErrorResponse | 500                            | application/json               |
| errors.SankaDefaultError       | 4XX, 5XX                       | \*/\*                          |