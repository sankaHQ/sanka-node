# InventoryTransactions

## Overview

### Available Operations

* [list](#list) - List Inventory Transactions
* [create](#create) - Create Inventory Transaction
* [get](#get) - Get Inventory Transaction
* [update](#update) - Update Inventory Transaction
* [delete](#delete) - Delete Inventory Transaction

## list

List Inventory Transactions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_inventory_transactions_public_api_list_workspace_inventory_transactions" method="get" path="/v1/public/inventory-transactions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { inventoryTransactionsList } from "sanka-sdk/funcs/inventory-transactions-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsList(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryTransactionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                   | [operations.ApiRoutersV1InventoryTransactionsPublicApiListWorkspaceInventoryTransactionsRequest](../../models/operations/api-routers-v1-inventory-transactions-public-api-list-workspace-inventory-transactions-request.md) | :heavy_check_mark:                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                              |
| `options.retries`                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                            |

### Response

**Promise\<[models.InventoryTransactionSchema[]](../../models/.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_inventory_transactions_public_api_create_public_inventory_transaction" method="post" path="/v1/public/inventory-transactions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.create({
    transactionType: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { inventoryTransactionsCreate } from "sanka-sdk/funcs/inventory-transactions-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsCreate(sanka, {
    transactionType: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryTransactionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PublicInventoryTransactionRequest](../../models/public-inventory-transaction-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicInventoryTransactionResponse](../../models/public-inventory-transaction-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.InventoryTransactionsErrorResponse | 400, 403, 404                             | application/json                          |
| errors.InventoryTransactionsErrorResponse | 500                                       | application/json                          |
| errors.SankaDefaultError                  | 4XX, 5XX                                  | \*/\*                                     |

## get

Get Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_inventory_transactions_public_api_get_public_inventory_transaction" method="get" path="/v1/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.get({
    transactionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { inventoryTransactionsGet } from "sanka-sdk/funcs/inventory-transactions-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsGet(sanka, {
    transactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryTransactionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                         | Type                                                                                                                                                                                                              | Required                                                                                                                                                                                                          | Description                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                         | [operations.ApiRoutersV1InventoryTransactionsPublicApiGetPublicInventoryTransactionRequest](../../models/operations/api-routers-v1-inventory-transactions-public-api-get-public-inventory-transaction-request.md) | :heavy_check_mark:                                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                                        |
| `options`                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                    |
| `options.retries`                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                  |

### Response

**Promise\<[models.InventoryTransactionSchema](../../models/inventory-transaction-schema.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.InventoryTransactionsErrorResponse | 400, 404                                  | application/json                          |
| errors.InventoryTransactionsErrorResponse | 500                                       | application/json                          |
| errors.SankaDefaultError                  | 4XX, 5XX                                  | \*/\*                                     |

## update

Update Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_inventory_transactions_public_api_update_public_inventory_transaction" method="put" path="/v1/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.update({
    transactionId: "<id>",
    body: {
      transactionType: "<value>",
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
import { inventoryTransactionsUpdate } from "sanka-sdk/funcs/inventory-transactions-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsUpdate(sanka, {
    transactionId: "<id>",
    body: {
      transactionType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryTransactionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.ApiRoutersV1InventoryTransactionsPublicApiUpdatePublicInventoryTransactionRequest](../../models/operations/api-routers-v1-inventory-transactions-public-api-update-public-inventory-transaction-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[models.PublicInventoryTransactionResponse](../../models/public-inventory-transaction-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.InventoryTransactionsErrorResponse | 400, 403, 404, 409                        | application/json                          |
| errors.InventoryTransactionsErrorResponse | 500                                       | application/json                          |
| errors.SankaDefaultError                  | 4XX, 5XX                                  | \*/\*                                     |

## delete

Delete Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_inventory_transactions_public_api_delete_public_inventory_transaction" method="delete" path="/v1/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.delete({
    transactionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { inventoryTransactionsDelete } from "sanka-sdk/funcs/inventory-transactions-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsDelete(sanka, {
    transactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryTransactionsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.ApiRoutersV1InventoryTransactionsPublicApiDeletePublicInventoryTransactionRequest](../../models/operations/api-routers-v1-inventory-transactions-public-api-delete-public-inventory-transaction-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[models.PublicInventoryTransactionResponse](../../models/public-inventory-transaction-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.InventoryTransactionsErrorResponse | 400, 403, 404                             | application/json                          |
| errors.InventoryTransactionsErrorResponse | 500                                       | application/json                          |
| errors.SankaDefaultError                  | 4XX, 5XX                                  | \*/\*                                     |