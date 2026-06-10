# InventoryTransactions

## Overview

### Available Operations

* [list](#list) - List Public Inventory Transactions
* [create](#create) - Create Public Inventory Transaction
* [get](#get) - Get Public Inventory Transaction
* [update](#update) - Update Public Inventory Transaction
* [delete](#delete) - Delete Public Inventory Transaction

## list

List Public Inventory Transactions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_inventory_transactions_api_v2_public_inventory_transactions_get" method="get" path="/v2/public/inventory-transactions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.list({});

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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsList(sanka, {});
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

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                              | [operations.ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGetRequest](../../models/operations/list-public-inventory-transactions-api-v2-public-inventory-transactions-get-request.md) | :heavy_check_mark:                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                             |
| `options`                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                         |
| `options.retries`                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                       |

### Response

**Promise\<[operations.ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGetResponse](../../models/operations/list-public-inventory-transactions-api-v2-public-inventory-transactions-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_inventory_transaction_api_v2_public_inventory_transactions_post" method="post" path="/v2/public/inventory-transactions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.create({
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
import { inventoryTransactionsCreate } from "sanka-sdk/funcs/inventory-transactions-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsCreate(sanka, {
    body: {},
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

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.CreatePublicInventoryTransactionApiV2PublicInventoryTransactionsPostRequest](../../models/operations/create-public-inventory-transaction-api-v2-public-inventory-transactions-post-request.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.CreatePublicInventoryTransactionApiV2PublicInventoryTransactionsPostResponse](../../models/operations/create-public-inventory-transaction-api-v2-public-inventory-transactions-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_inventory_transaction_api_v2_public_inventory_transactions__transaction_id__get" method="get" path="/v2/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGetRequest](../../models/operations/get-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                 |
| `options.retries`                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                               |

### Response

**Promise\<[operations.GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGetResponse](../../models/operations/get-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_inventory_transaction_api_v2_public_inventory_transactions__transaction_id__put" method="put" path="/v2/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.inventoryTransactions.update({
    transactionId: "<id>",
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
import { inventoryTransactionsUpdate } from "sanka-sdk/funcs/inventory-transactions-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inventoryTransactionsUpdate(sanka, {
    transactionId: "<id>",
    body: {},
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

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.UpdatePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdPutRequest](../../models/operations/update-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<[operations.UpdatePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdPutResponse](../../models/operations/update-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Inventory Transaction

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_inventory_transaction_api_v2_public_inventory_transactions__transaction_id__delete" method="delete" path="/v2/public/inventory-transactions/{transaction_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                  | [operations.DeletePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdDeleteRequest](../../models/operations/delete-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                             |
| `options.retries`                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                           |

### Response

**Promise\<[operations.DeletePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdDeleteResponse](../../models/operations/delete-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |