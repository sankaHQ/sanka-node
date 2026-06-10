# Incentives

## Overview

### Available Operations

* [listPublicIncentivesApiV2PublicIncentivesGet](#listpublicincentivesapiv2publicincentivesget) - List Public Incentives
* [listPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet](#listpublicincentivecompanyoptionsapiv2publicincentivescompanyoptionsget) - List Public Incentive Company Options
* [listPublicIncentivePlansApiV2PublicIncentivesPlansGet](#listpublicincentiveplansapiv2publicincentivesplansget) - List Public Incentive Plans
* [createPublicIncentivePlanApiV2PublicIncentivesPlansPost](#createpublicincentiveplanapiv2publicincentivesplanspost) - Create Public Incentive Plan
* [updatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch](#updatepublicincentiveplanapiv2publicincentivesplansplanidpatch) - Update Public Incentive Plan
* [deletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete](#deletepublicincentiveplanapiv2publicincentivesplansplaniddelete) - Delete Public Incentive Plan
* [listPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet](#listpublicincentiveallocationsapiv2publicincentivesallocationsget) - List Public Incentive Allocations
* [replacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut](#replacepublicincentiveallocationsapiv2publicincentivesallocationsput) - Replace Public Incentive Allocations
* [calculatePublicIncentivesApiV2PublicIncentivesCalculatePost](#calculatepublicincentivesapiv2publicincentivescalculatepost) - Calculate Public Incentives
* [approvePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost](#approvepublicincentivesbulkapiv2publicincentivesapprovebulkpost) - Approve Public Incentives Bulk
* [listPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet](#listpublicincentivebatchesapiv2publicincentivesbatchesget) - List Public Incentive Batches
* [createPublicIncentiveBatchApiV2PublicIncentivesBatchesPost](#createpublicincentivebatchapiv2publicincentivesbatchespost) - Create Public Incentive Batch
* [getPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet](#getpublicincentivebatchapiv2publicincentivesbatchesbatchidget) - Get Public Incentive Batch
* [approvePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost](#approvepublicincentivebatchapiv2publicincentivesbatchesbatchidapprovepost) - Approve Public Incentive Batch
* [markPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost](#markpublicincentivebatchpaidapiv2publicincentivesbatchesbatchidmarkpaidpost) - Mark Public Incentive Batch Paid
* [approvePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost](#approvepublicincentiveapiv2publicincentivesincentiveidapprovepost) - Approve Public Incentive

## listPublicIncentivesApiV2PublicIncentivesGet

List Public Incentives

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_incentives_api_v2_public_incentives_get" method="get" path="/v2/public/incentives" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.listPublicIncentivesApiV2PublicIncentivesGet({
    query: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesListPublicIncentivesApiV2PublicIncentivesGet } from "sanka-sdk/funcs/incentives-list-public-incentives-api-v2-public-incentives-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesListPublicIncentivesApiV2PublicIncentivesGet(sanka, {
    query: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesListPublicIncentivesApiV2PublicIncentivesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicIncentivesApiV2PublicIncentivesGetRequest](../../models/operations/list-public-incentives-api-v2-public-incentives-get-request.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicIncentivesApiV2PublicIncentivesGetResponse](../../models/operations/list-public-incentives-api-v2-public-incentives-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet

List Public Incentive Company Options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_incentive_company_options_api_v2_public_incentives_company_options_get" method="get" path="/v2/public/incentives/company-options" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.listPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import {
  incentivesListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet,
} from "sanka-sdk/funcs/incentives-list-public-incentive-company-options-api-v2-public-incentives-company-options-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.ListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGetRequest](../../models/operations/list-public-incentive-company-options-api-v2-public-incentives-company-options-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<[operations.ListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGetResponse](../../models/operations/list-public-incentive-company-options-api-v2-public-incentives-company-options-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicIncentivePlansApiV2PublicIncentivesPlansGet

List Public Incentive Plans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_incentive_plans_api_v2_public_incentives_plans_get" method="get" path="/v2/public/incentives/plans" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.listPublicIncentivePlansApiV2PublicIncentivesPlansGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesListPublicIncentivePlansApiV2PublicIncentivesPlansGet } from "sanka-sdk/funcs/incentives-list-public-incentive-plans-api-v2-public-incentives-plans-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesListPublicIncentivePlansApiV2PublicIncentivesPlansGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesListPublicIncentivePlansApiV2PublicIncentivesPlansGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicIncentivePlansApiV2PublicIncentivesPlansGetRequest](../../models/operations/list-public-incentive-plans-api-v2-public-incentives-plans-get-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicIncentivePlansApiV2PublicIncentivesPlansGetResponse](../../models/operations/list-public-incentive-plans-api-v2-public-incentives-plans-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicIncentivePlanApiV2PublicIncentivesPlansPost

Create Public Incentive Plan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_incentive_plan_api_v2_public_incentives_plans_post" method="post" path="/v2/public/incentives/plans" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.createPublicIncentivePlanApiV2PublicIncentivesPlansPost({
    body: {
      name: "<value>",
      baseEvent: "<value>",
      rateType: "<value>",
      rateValue: 942.83,
      effectiveFrom: new Date("2024-09-14"),
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
import { incentivesCreatePublicIncentivePlanApiV2PublicIncentivesPlansPost } from "sanka-sdk/funcs/incentives-create-public-incentive-plan-api-v2-public-incentives-plans-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesCreatePublicIncentivePlanApiV2PublicIncentivesPlansPost(sanka, {
    body: {
      name: "<value>",
      baseEvent: "<value>",
      rateType: "<value>",
      rateValue: 942.83,
      effectiveFrom: new Date("2024-09-14"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesCreatePublicIncentivePlanApiV2PublicIncentivesPlansPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.CreatePublicIncentivePlanApiV2PublicIncentivesPlansPostRequest](../../models/operations/create-public-incentive-plan-api-v2-public-incentives-plans-post-request.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.CreatePublicIncentivePlanApiV2PublicIncentivesPlansPostResponse](../../models/operations/create-public-incentive-plan-api-v2-public-incentives-plans-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch

Update Public Incentive Plan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_incentive_plan_api_v2_public_incentives_plans__plan_id__patch" method="patch" path="/v2/public/incentives/plans/{plan_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.updatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch({
    planId: "<id>",
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
import { incentivesUpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch } from "sanka-sdk/funcs/incentives-update-public-incentive-plan-api-v2-public-incentives-plans-plan-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesUpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch(sanka, {
    planId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesUpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.UpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatchRequest](../../models/operations/update-public-incentive-plan-api-v2-public-incentives-plans-plan-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[operations.UpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatchResponse](../../models/operations/update-public-incentive-plan-api-v2-public-incentives-plans-plan-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete

Delete Public Incentive Plan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_incentive_plan_api_v2_public_incentives_plans__plan_id__delete" method="delete" path="/v2/public/incentives/plans/{plan_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.deletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete({
    planId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesDeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete } from "sanka-sdk/funcs/incentives-delete-public-incentive-plan-api-v2-public-incentives-plans-plan-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesDeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete(sanka, {
    planId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesDeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDeleteRequest](../../models/operations/delete-public-incentive-plan-api-v2-public-incentives-plans-plan-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDeleteResponse](../../models/operations/delete-public-incentive-plan-api-v2-public-incentives-plans-plan-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet

List Public Incentive Allocations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_incentive_allocations_api_v2_public_incentives_allocations_get" method="get" path="/v2/public/incentives/allocations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.listPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet({
    sourceObjectType: "<value>",
    sourceRecordId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet } from "sanka-sdk/funcs/incentives-list-public-incentive-allocations-api-v2-public-incentives-allocations-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet(sanka, {
    sourceObjectType: "<value>",
    sourceRecordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGetRequest](../../models/operations/list-public-incentive-allocations-api-v2-public-incentives-allocations-get-request.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[operations.ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGetResponse](../../models/operations/list-public-incentive-allocations-api-v2-public-incentives-allocations-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## replacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut

Replace Public Incentive Allocations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="replace_public_incentive_allocations_api_v2_public_incentives_allocations_put" method="put" path="/v2/public/incentives/allocations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.replacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut({
    body: {
      sourceObjectType: "<value>",
      sourceRecordId: "<id>",
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
import { incentivesReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut } from "sanka-sdk/funcs/incentives-replace-public-incentive-allocations-api-v2-public-incentives-allocations-put.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut(sanka, {
    body: {
      sourceObjectType: "<value>",
      sourceRecordId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.ReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPutRequest](../../models/operations/replace-public-incentive-allocations-api-v2-public-incentives-allocations-put-request.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.ReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPutResponse](../../models/operations/replace-public-incentive-allocations-api-v2-public-incentives-allocations-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## calculatePublicIncentivesApiV2PublicIncentivesCalculatePost

Calculate Public Incentives

### Example Usage

<!-- UsageSnippet language="typescript" operationID="calculate_public_incentives_api_v2_public_incentives_calculate_post" method="post" path="/v2/public/incentives/calculate" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.calculatePublicIncentivesApiV2PublicIncentivesCalculatePost({
    body: {
      period: "<value>",
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
import { incentivesCalculatePublicIncentivesApiV2PublicIncentivesCalculatePost } from "sanka-sdk/funcs/incentives-calculate-public-incentives-api-v2-public-incentives-calculate-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesCalculatePublicIncentivesApiV2PublicIncentivesCalculatePost(sanka, {
    body: {
      period: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesCalculatePublicIncentivesApiV2PublicIncentivesCalculatePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                               | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                               | [operations.CalculatePublicIncentivesApiV2PublicIncentivesCalculatePostRequest](../../models/operations/calculate-public-incentives-api-v2-public-incentives-calculate-post-request.md) | :heavy_check_mark:                                                                                                                                                                      | The request object to use for the request.                                                                                                                                              |
| `options`                                                                                                                                                                               | RequestOptions                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.          |
| `options.retries`                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                        |

### Response

**Promise\<[operations.CalculatePublicIncentivesApiV2PublicIncentivesCalculatePostResponse](../../models/operations/calculate-public-incentives-api-v2-public-incentives-calculate-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## approvePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost

Approve Public Incentives Bulk

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_public_incentives_bulk_api_v2_public_incentives_approve_bulk_post" method="post" path="/v2/public/incentives/approve-bulk" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.approvePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost({
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
import { incentivesApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost } from "sanka-sdk/funcs/incentives-approve-public-incentives-bulk-api-v2-public-incentives-approve-bulk-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                         | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                         | [operations.ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPostRequest](../../models/operations/approve-public-incentives-bulk-api-v2-public-incentives-approve-bulk-post-request.md) | :heavy_check_mark:                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                    |
| `options.retries`                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                  |

### Response

**Promise\<[operations.ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPostResponse](../../models/operations/approve-public-incentives-bulk-api-v2-public-incentives-approve-bulk-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet

List Public Incentive Batches

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_incentive_batches_api_v2_public_incentives_batches_get" method="get" path="/v2/public/incentives/batches" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.listPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet({
    query: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet } from "sanka-sdk/funcs/incentives-list-public-incentive-batches-api-v2-public-incentives-batches-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet(sanka, {
    query: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGetRequest](../../models/operations/list-public-incentive-batches-api-v2-public-incentives-batches-get-request.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[operations.ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGetResponse](../../models/operations/list-public-incentive-batches-api-v2-public-incentives-batches-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicIncentiveBatchApiV2PublicIncentivesBatchesPost

Create Public Incentive Batch

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_incentive_batch_api_v2_public_incentives_batches_post" method="post" path="/v2/public/incentives/batches" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.createPublicIncentiveBatchApiV2PublicIncentivesBatchesPost({
    body: {
      period: "<value>",
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
import { incentivesCreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPost } from "sanka-sdk/funcs/incentives-create-public-incentive-batch-api-v2-public-incentives-batches-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesCreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPost(sanka, {
    body: {
      period: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesCreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostRequest](../../models/operations/create-public-incentive-batch-api-v2-public-incentives-batches-post-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostResponse](../../models/operations/create-public-incentive-batch-api-v2-public-incentives-batches-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet

Get Public Incentive Batch

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_incentive_batch_api_v2_public_incentives_batches__batch_id__get" method="get" path="/v2/public/incentives/batches/{batch_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.getPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet({
    batchId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesGetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet } from "sanka-sdk/funcs/incentives-get-public-incentive-batch-api-v2-public-incentives-batches-batch-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesGetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet(sanka, {
    batchId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesGetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGetRequest](../../models/operations/get-public-incentive-batch-api-v2-public-incentives-batches-batch-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[operations.GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGetResponse](../../models/operations/get-public-incentive-batch-api-v2-public-incentives-batches-batch-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## approvePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost

Approve Public Incentive Batch

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_public_incentive_batch_api_v2_public_incentives_batches__batch_id__approve_post" method="post" path="/v2/public/incentives/batches/{batch_id}/approve" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.approvePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost({
    batchId: "<id>",
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
  incentivesApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost,
} from "sanka-sdk/funcs/incentives-approve-public-incentive-batch-api-v2-public-incentives-batches-batch-id-approve-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost(sanka, {
    batchId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePostRequest](../../models/operations/approve-public-incentive-batch-api-v2-public-incentives-batches-batch-id-approve-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[operations.ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePostResponse](../../models/operations/approve-public-incentive-batch-api-v2-public-incentives-batches-batch-id-approve-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## markPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost

Mark Public Incentive Batch Paid

### Example Usage

<!-- UsageSnippet language="typescript" operationID="mark_public_incentive_batch_paid_api_v2_public_incentives_batches__batch_id__mark_paid_post" method="post" path="/v2/public/incentives/batches/{batch_id}/mark-paid" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.markPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost({
    batchId: "<id>",
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
  incentivesMarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost,
} from "sanka-sdk/funcs/incentives-mark-public-incentive-batch-paid-api-v2-public-incentives-batches-batch-id-mark-paid-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesMarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost(sanka, {
    batchId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesMarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                     | [operations.MarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPostRequest](../../models/operations/mark-public-incentive-batch-paid-api-v2-public-incentives-batches-batch-id-mark-paid-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                |
| `options.retries`                                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                              |

### Response

**Promise\<[operations.MarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPostResponse](../../models/operations/mark-public-incentive-batch-paid-api-v2-public-incentives-batches-batch-id-mark-paid-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## approvePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost

Approve Public Incentive

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_public_incentive_api_v2_public_incentives__incentive_id__approve_post" method="post" path="/v2/public/incentives/{incentive_id}/approve" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.incentives.approvePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost({
    incentiveId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { incentivesApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost } from "sanka-sdk/funcs/incentives-approve-public-incentive-api-v2-public-incentives-incentive-id-approve-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await incentivesApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost(sanka, {
    incentiveId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("incentivesApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                             | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                             | [operations.ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePostRequest](../../models/operations/approve-public-incentive-api-v2-public-incentives-incentive-id-approve-post-request.md) | :heavy_check_mark:                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                            |
| `options`                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                        |
| `options.retries`                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                      |

### Response

**Promise\<[operations.ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePostResponse](../../models/operations/approve-public-incentive-api-v2-public-incentives-incentive-id-approve-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |