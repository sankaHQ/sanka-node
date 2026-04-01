# Subscriptions

## Overview

### Available Operations

* [list](#list) - List Subscriptions
* [create](#create) - Create Subscription
* [get](#get) - Get Subscription
* [update](#update) - Update Subscription
* [delete](#delete) - Delete Subscription

## list

List Subscriptions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_subscriptions_public_api_list_workspace_subscriptions" method="get" path="/v1/public/subscriptions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.subscriptions.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { subscriptionsList } from "sanka-sdk/funcs/subscriptions-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await subscriptionsList(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                 | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                 | [operations.ApiRoutersV1SubscriptionsPublicApiListWorkspaceSubscriptionsRequest](../../models/operations/api-routers-v1-subscriptions-public-api-list-workspace-subscriptions-request.md) | :heavy_check_mark:                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                 | RequestOptions                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.            |
| `options.retries`                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                          |

### Response

**Promise\<[models.SubscriptionDetailSchema[]](../../models/.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_subscriptions_public_api_create_public_subscription" method="post" path="/v1/public/subscriptions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.subscriptions.create({
    cid: "<id>",
    items: [
      {
        id: "<id>",
        amount: 183731,
      },
    ],
    subscriptionStatus: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { subscriptionsCreate } from "sanka-sdk/funcs/subscriptions-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await subscriptionsCreate(sanka, {
    cid: "<id>",
    items: [
      {
        id: "<id>",
        amount: 183731,
      },
    ],
    subscriptionStatus: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SubscriptionCreatePayload](../../models/subscription-create-payload.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubscriptionDetailSchema](../../models/subscription-detail-schema.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SubscriptionErrorResponse | 400, 403, 404                    | application/json                 |
| errors.SubscriptionErrorResponse | 500                              | application/json                 |
| errors.SankaDefaultError         | 4XX, 5XX                         | \*/\*                            |

## get

Get Subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_subscriptions_public_api_get_public_subscription" method="get" path="/v1/public/subscriptions/{subscription_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.subscriptions.get({
    subscriptionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { subscriptionsGet } from "sanka-sdk/funcs/subscriptions-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await subscriptionsGet(sanka, {
    subscriptionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.ApiRoutersV1SubscriptionsPublicApiGetPublicSubscriptionRequest](../../models/operations/api-routers-v1-subscriptions-public-api-get-public-subscription-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[models.SubscriptionDetailSchema](../../models/subscription-detail-schema.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SubscriptionErrorResponse | 400, 403, 404                    | application/json                 |
| errors.SubscriptionErrorResponse | 500                              | application/json                 |
| errors.SankaDefaultError         | 4XX, 5XX                         | \*/\*                            |

## update

Update Subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_subscriptions_public_api_update_public_subscription" method="put" path="/v1/public/subscriptions/{subscription_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.subscriptions.update({
    subscriptionId: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { subscriptionsUpdate } from "sanka-sdk/funcs/subscriptions-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await subscriptionsUpdate(sanka, {
    subscriptionId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.ApiRoutersV1SubscriptionsPublicApiUpdatePublicSubscriptionRequest](../../models/operations/api-routers-v1-subscriptions-public-api-update-public-subscription-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.SubscriptionDetailSchema](../../models/subscription-detail-schema.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SubscriptionErrorResponse | 400, 403, 404                    | application/json                 |
| errors.SubscriptionErrorResponse | 500                              | application/json                 |
| errors.SankaDefaultError         | 4XX, 5XX                         | \*/\*                            |

## delete

Delete Subscription

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_subscriptions_public_api_delete_public_subscription" method="delete" path="/v1/public/subscriptions/{subscription_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.subscriptions.delete({
    subscriptionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { subscriptionsDelete } from "sanka-sdk/funcs/subscriptions-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await subscriptionsDelete(sanka, {
    subscriptionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.ApiRoutersV1SubscriptionsPublicApiDeletePublicSubscriptionRequest](../../models/operations/api-routers-v1-subscriptions-public-api-delete-public-subscription-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.PublicSubscriptionDeleteResponse](../../models/public-subscription-delete-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SubscriptionErrorResponse | 400, 403, 404, 409               | application/json                 |
| errors.SubscriptionErrorResponse | 500                              | application/json                 |
| errors.SankaDefaultError         | 4XX, 5XX                         | \*/\*                            |