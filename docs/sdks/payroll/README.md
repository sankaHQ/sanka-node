# Payroll

## Overview

### Available Operations

* [listPublicPayrollProfilesApiV2PublicPayrollProfilesGet](#listpublicpayrollprofilesapiv2publicpayrollprofilesget) - List Public Payroll Profiles
* [upsertPublicPayrollProfileApiV2PublicPayrollProfilesPost](#upsertpublicpayrollprofileapiv2publicpayrollprofilespost) - Upsert Public Payroll Profile
* [listPublicPayrollRunsApiV2PublicPayrollRunsGet](#listpublicpayrollrunsapiv2publicpayrollrunsget) - List Public Payroll Runs
* [calculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost](#calculatepublicpayrollrunapiv2publicpayrollrunscalculatepost) - Calculate Public Payroll Run
* [getPublicPayrollRunApiV2PublicPayrollRunsRunIdGet](#getpublicpayrollrunapiv2publicpayrollrunsrunidget) - Get Public Payroll Run
* [approvePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost](#approvepublicpayrollrunapiv2publicpayrollrunsrunidapprovepost) - Approve Public Payroll Run
* [createPublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost](#createpublicpayrolljournalentryapiv2publicpayrollrunsrunidjournalentrypost) - Create Public Payroll Journal Entry
* [downloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet](#downloadpublicpayrollpayslippdfapiv2publicpayrollrunsrunidpayslipspdfget) - Download Public Payroll Payslip Pdf

## listPublicPayrollProfilesApiV2PublicPayrollProfilesGet

List Public Payroll Profiles

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_payroll_profiles_api_v2_public_payroll_profiles_get" method="get" path="/v2/public/payroll/profiles" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.listPublicPayrollProfilesApiV2PublicPayrollProfilesGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { payrollListPublicPayrollProfilesApiV2PublicPayrollProfilesGet } from "sanka-sdk/funcs/payroll-list-public-payroll-profiles-api-v2-public-payroll-profiles-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollListPublicPayrollProfilesApiV2PublicPayrollProfilesGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollListPublicPayrollProfilesApiV2PublicPayrollProfilesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicPayrollProfilesApiV2PublicPayrollProfilesGetRequest](../../models/operations/list-public-payroll-profiles-api-v2-public-payroll-profiles-get-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicPayrollProfilesApiV2PublicPayrollProfilesGetResponse](../../models/operations/list-public-payroll-profiles-api-v2-public-payroll-profiles-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## upsertPublicPayrollProfileApiV2PublicPayrollProfilesPost

Upsert Public Payroll Profile

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_public_payroll_profile_api_v2_public_payroll_profiles_post" method="post" path="/v2/public/payroll/profiles" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.upsertPublicPayrollProfileApiV2PublicPayrollProfilesPost({
    body: {
      employeeId: "<id>",
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
import { payrollUpsertPublicPayrollProfileApiV2PublicPayrollProfilesPost } from "sanka-sdk/funcs/payroll-upsert-public-payroll-profile-api-v2-public-payroll-profiles-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollUpsertPublicPayrollProfileApiV2PublicPayrollProfilesPost(sanka, {
    body: {
      employeeId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollUpsertPublicPayrollProfileApiV2PublicPayrollProfilesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostRequest](../../models/operations/upsert-public-payroll-profile-api-v2-public-payroll-profiles-post-request.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[operations.UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostResponse](../../models/operations/upsert-public-payroll-profile-api-v2-public-payroll-profiles-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicPayrollRunsApiV2PublicPayrollRunsGet

List Public Payroll Runs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_payroll_runs_api_v2_public_payroll_runs_get" method="get" path="/v2/public/payroll/runs" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.listPublicPayrollRunsApiV2PublicPayrollRunsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { payrollListPublicPayrollRunsApiV2PublicPayrollRunsGet } from "sanka-sdk/funcs/payroll-list-public-payroll-runs-api-v2-public-payroll-runs-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollListPublicPayrollRunsApiV2PublicPayrollRunsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollListPublicPayrollRunsApiV2PublicPayrollRunsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicPayrollRunsApiV2PublicPayrollRunsGetRequest](../../models/operations/list-public-payroll-runs-api-v2-public-payroll-runs-get-request.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicPayrollRunsApiV2PublicPayrollRunsGetResponse](../../models/operations/list-public-payroll-runs-api-v2-public-payroll-runs-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## calculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost

Calculate Public Payroll Run

### Example Usage

<!-- UsageSnippet language="typescript" operationID="calculate_public_payroll_run_api_v2_public_payroll_runs_calculate_post" method="post" path="/v2/public/payroll/runs/calculate" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.calculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost({
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
import { payrollCalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost } from "sanka-sdk/funcs/payroll-calculate-public-payroll-run-api-v2-public-payroll-runs-calculate-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollCalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost(sanka, {
    body: {
      period: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollCalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                   | [operations.CalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePostRequest](../../models/operations/calculate-public-payroll-run-api-v2-public-payroll-runs-calculate-post-request.md) | :heavy_check_mark:                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                   | RequestOptions                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.              |
| `options.retries`                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                            |

### Response

**Promise\<[operations.CalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePostResponse](../../models/operations/calculate-public-payroll-run-api-v2-public-payroll-runs-calculate-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicPayrollRunApiV2PublicPayrollRunsRunIdGet

Get Public Payroll Run

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_payroll_run_api_v2_public_payroll_runs__run_id__get" method="get" path="/v2/public/payroll/runs/{run_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.getPublicPayrollRunApiV2PublicPayrollRunsRunIdGet({
    runId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { payrollGetPublicPayrollRunApiV2PublicPayrollRunsRunIdGet } from "sanka-sdk/funcs/payroll-get-public-payroll-run-api-v2-public-payroll-runs-run-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollGetPublicPayrollRunApiV2PublicPayrollRunsRunIdGet(sanka, {
    runId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollGetPublicPayrollRunApiV2PublicPayrollRunsRunIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicPayrollRunApiV2PublicPayrollRunsRunIdGetRequest](../../models/operations/get-public-payroll-run-api-v2-public-payroll-runs-run-id-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicPayrollRunApiV2PublicPayrollRunsRunIdGetResponse](../../models/operations/get-public-payroll-run-api-v2-public-payroll-runs-run-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## approvePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost

Approve Public Payroll Run

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_public_payroll_run_api_v2_public_payroll_runs__run_id__approve_post" method="post" path="/v2/public/payroll/runs/{run_id}/approve" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.approvePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost({
    runId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { payrollApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost } from "sanka-sdk/funcs/payroll-approve-public-payroll-run-api-v2-public-payroll-runs-run-id-approve-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost(sanka, {
    runId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                       | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                       | [operations.ApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePostRequest](../../models/operations/approve-public-payroll-run-api-v2-public-payroll-runs-run-id-approve-post-request.md) | :heavy_check_mark:                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                      |
| `options`                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                  |
| `options.retries`                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                |

### Response

**Promise\<[operations.ApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePostResponse](../../models/operations/approve-public-payroll-run-api-v2-public-payroll-runs-run-id-approve-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost

Create Public Payroll Journal Entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_payroll_journal_entry_api_v2_public_payroll_runs__run_id__journal_entry_post" method="post" path="/v2/public/payroll/runs/{run_id}/journal-entry" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.createPublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost({
    runId: "<id>",
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
import {
  payrollCreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost,
} from "sanka-sdk/funcs/payroll-create-public-payroll-journal-entry-api-v2-public-payroll-runs-run-id-journal-entry-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollCreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost(sanka, {
    runId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollCreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                   | [operations.CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostRequest](../../models/operations/create-public-payroll-journal-entry-api-v2-public-payroll-runs-run-id-journal-entry-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                              |
| `options.retries`                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                            |

### Response

**Promise\<[operations.CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostResponse](../../models/operations/create-public-payroll-journal-entry-api-v2-public-payroll-runs-run-id-journal-entry-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## downloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet

Download Public Payroll Payslip Pdf

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download_public_payroll_payslip_pdf_api_v2_public_payroll_runs__run_id__payslips_pdf_get" method="get" path="/v2/public/payroll/runs/{run_id}/payslips/pdf" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.payroll.downloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet({
    runId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { payrollDownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet } from "sanka-sdk/funcs/payroll-download-public-payroll-payslip-pdf-api-v2-public-payroll-runs-run-id-payslips-pdf-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await payrollDownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet(sanka, {
    runId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payrollDownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGetRequest](../../models/operations/download-public-payroll-payslip-pdf-api-v2-public-payroll-runs-run-id-payslips-pdf-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[operations.DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGetResponse](../../models/operations/download-public-payroll-payslip-pdf-api-v2-public-payroll-runs-run-id-payslips-pdf-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |