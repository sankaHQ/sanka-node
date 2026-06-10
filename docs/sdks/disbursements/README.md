# Disbursements

## Overview

### Available Operations

* [list](#list) - List Public Disbursements
* [create](#create) - Create Public Disbursement
* [get](#get) - Get Public Disbursement
* [update](#update) - Update Public Disbursement
* [delete](#delete) - Delete Public Disbursement
* [listPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet](#listpublicdisbursementallocationsapiv2publicdisbursementsdisbursementidallocationsget) - List Public Disbursement Allocations
* [createPublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost](#createpublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationspost) - Create Public Disbursement Allocation
* [updatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch](#updatepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationidpatch) - Update Public Disbursement Allocation
* [deletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete](#deletepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationiddelete) - Delete Public Disbursement Allocation

## list

List Public Disbursements

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_disbursements_api_v2_public_disbursements_get" method="get" path="/v2/public/disbursements" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { disbursementsList } from "sanka-sdk/funcs/disbursements-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsList(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicDisbursementsApiV2PublicDisbursementsGetRequest](../../models/operations/list-public-disbursements-api-v2-public-disbursements-get-request.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicDisbursementsApiV2PublicDisbursementsGetResponse](../../models/operations/list-public-disbursements-api-v2-public-disbursements-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Disbursement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_disbursement_api_v2_public_disbursements_post" method="post" path="/v2/public/disbursements" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.create({
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
import { disbursementsCreate } from "sanka-sdk/funcs/disbursements-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsCreate(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicDisbursementApiV2PublicDisbursementsPostRequest](../../models/operations/create-public-disbursement-api-v2-public-disbursements-post-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicDisbursementApiV2PublicDisbursementsPostResponse](../../models/operations/create-public-disbursement-api-v2-public-disbursements-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Disbursement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_disbursement_api_v2_public_disbursements__disbursement_id__get" method="get" path="/v2/public/disbursements/{disbursement_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.get({
    disbursementId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { disbursementsGet } from "sanka-sdk/funcs/disbursements-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsGet(sanka, {
    disbursementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.GetPublicDisbursementApiV2PublicDisbursementsDisbursementIdGetRequest](../../models/operations/get-public-disbursement-api-v2-public-disbursements-disbursement-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[operations.GetPublicDisbursementApiV2PublicDisbursementsDisbursementIdGetResponse](../../models/operations/get-public-disbursement-api-v2-public-disbursements-disbursement-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Disbursement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_disbursement_api_v2_public_disbursements__disbursement_id__put" method="put" path="/v2/public/disbursements/{disbursement_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.update({
    disbursementId: "<id>",
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
import { disbursementsUpdate } from "sanka-sdk/funcs/disbursements-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsUpdate(sanka, {
    disbursementId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.UpdatePublicDisbursementApiV2PublicDisbursementsDisbursementIdPutRequest](../../models/operations/update-public-disbursement-api-v2-public-disbursements-disbursement-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[operations.UpdatePublicDisbursementApiV2PublicDisbursementsDisbursementIdPutResponse](../../models/operations/update-public-disbursement-api-v2-public-disbursements-disbursement-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Disbursement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_disbursement_api_v2_public_disbursements__disbursement_id__delete" method="delete" path="/v2/public/disbursements/{disbursement_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.delete({
    disbursementId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { disbursementsDelete } from "sanka-sdk/funcs/disbursements-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsDelete(sanka, {
    disbursementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.DeletePublicDisbursementApiV2PublicDisbursementsDisbursementIdDeleteRequest](../../models/operations/delete-public-disbursement-api-v2-public-disbursements-disbursement-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.DeletePublicDisbursementApiV2PublicDisbursementsDisbursementIdDeleteResponse](../../models/operations/delete-public-disbursement-api-v2-public-disbursements-disbursement-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet

List Public Disbursement Allocations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_disbursement_allocations_api_v2_public_disbursements__disbursement_id__allocations_get" method="get" path="/v2/public/disbursements/{disbursement_id}/allocations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.listPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet({
    disbursementId: "<id>",
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
  disbursementsListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet,
} from "sanka-sdk/funcs/disbursements-list-public-disbursement-allocations-api-v2-public-disbursements-disbursement-id-allocations-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet(sanka, {
    disbursementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                      | [operations.ListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGetRequest](../../models/operations/list-public-disbursement-allocations-api-v2-public-disbursements-disbursement-id-allocations-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                 |
| `options.retries`                                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                               |

### Response

**Promise\<[operations.ListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGetResponse](../../models/operations/list-public-disbursement-allocations-api-v2-public-disbursements-disbursement-id-allocations-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost

Create Public Disbursement Allocation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_disbursement_allocation_api_v2_public_disbursements__disbursement_id__allocations_post" method="post" path="/v2/public/disbursements/{disbursement_id}/allocations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.createPublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost({
    disbursementId: "<id>",
    body: {
      "key": "<value>",
      "key1": "<value>",
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
  disbursementsCreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost,
} from "sanka-sdk/funcs/disbursements-create-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsCreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost(sanka, {
    disbursementId: "<id>",
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsCreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                          | [operations.CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostRequest](../../models/operations/create-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                     |
| `options.retries`                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                   |

### Response

**Promise\<[operations.CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostResponse](../../models/operations/create-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch

Update Public Disbursement Allocation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_disbursement_allocation_api_v2_public_disbursements__disbursement_id__allocations__allocation_id__patch" method="patch" path="/v2/public/disbursements/{disbursement_id}/allocations/{allocation_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.updatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch({
    disbursementId: "<id>",
    allocationId: "<id>",
    body: {
      "key": "<value>",
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
  disbursementsUpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch,
} from "sanka-sdk/funcs/disbursements-update-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsUpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch(sanka, {
    disbursementId: "<id>",
    allocationId: "<id>",
    body: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsUpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                                      | [operations.UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatchRequest](../../models/operations/update-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                 |
| `options.retries`                                                                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                               |

### Response

**Promise\<[operations.UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatchResponse](../../models/operations/update-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete

Delete Public Disbursement Allocation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_disbursement_allocation_api_v2_public_disbursements__disbursement_id__allocations__allocation_id__delete" method="delete" path="/v2/public/disbursements/{disbursement_id}/allocations/{allocation_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.disbursements.deletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete({
    disbursementId: "<id>",
    allocationId: "<id>",
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
  disbursementsDeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete,
} from "sanka-sdk/funcs/disbursements-delete-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await disbursementsDeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete(sanka, {
    disbursementId: "<id>",
    allocationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("disbursementsDeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                                        | [operations.DeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDeleteRequest](../../models/operations/delete-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                   |
| `options.retries`                                                                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.DeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDeleteResponse](../../models/operations/delete-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |