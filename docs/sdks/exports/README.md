# Exports

## Overview

### Available Operations

* [listPublicExportJobsCompatApiV2PublicExportsGet](#listpublicexportjobscompatapiv2publicexportsget) - List Public Export Jobs Compat
* [createPublicExportJobCompatApiV2PublicExportsPost](#createpublicexportjobcompatapiv2publicexportspost) - Create Public Export Job Compat
* [getPublicExportJobCompatApiV2PublicExportsJobIdGet](#getpublicexportjobcompatapiv2publicexportsjobidget) - Get Public Export Job Compat
* [cancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost](#cancelpublicexportjobcompatapiv2publicexportsjobidcancelpost) - Cancel Public Export Job Compat

## listPublicExportJobsCompatApiV2PublicExportsGet

List Public Export Jobs Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_export_jobs_compat_api_v2_public_exports_get" method="get" path="/v2/public/exports" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.exports.listPublicExportJobsCompatApiV2PublicExportsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { exportsListPublicExportJobsCompatApiV2PublicExportsGet } from "sanka-sdk/funcs/exports-list-public-export-jobs-compat-api-v2-public-exports-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exportsListPublicExportJobsCompatApiV2PublicExportsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exportsListPublicExportJobsCompatApiV2PublicExportsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicExportJobsCompatApiV2PublicExportsGetRequest](../../models/operations/list-public-export-jobs-compat-api-v2-public-exports-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicExportJobsCompatApiV2PublicExportsGetResponse](../../models/operations/list-public-export-jobs-compat-api-v2-public-exports-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicExportJobCompatApiV2PublicExportsPost

Create an export job.

Integration-destination exports are validated against the runnable
delivery matrix. HubSpot Company, Contact, Custom Object, Deal, Invoice,
Item, Order, Subscription, and Ticket exports use the dedicated Hatchet
bulk workflow, bounded CSV chunks, and HubSpot's Imports API. Invoice
requires an explicitly selected HubSpot custom-object type id. NextEngine
Item and Order exports keep their dedicated Hatchet pipelines. Provider and
object pairs without a working delivery pipeline are rejected with HTTP
400 and error code ``INTEGRATION_EXPORT_NOT_SUPPORTED`` before any job
history row is created. Empty or unknown provider slugs are rejected with
``INTEGRATION_EXPORT_UNKNOWN_PROVIDER``. Accepted jobs stay queued or
running until provider completion and required post-processing finish.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_export_job_compat_api_v2_public_exports_post" method="post" path="/v2/public/exports" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.exports.createPublicExportJobCompatApiV2PublicExportsPost({
    body: {
      objectType: "<value>",
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
import { exportsCreatePublicExportJobCompatApiV2PublicExportsPost } from "sanka-sdk/funcs/exports-create-public-export-job-compat-api-v2-public-exports-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exportsCreatePublicExportJobCompatApiV2PublicExportsPost(sanka, {
    body: {
      objectType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exportsCreatePublicExportJobCompatApiV2PublicExportsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicExportJobCompatApiV2PublicExportsPostRequest](../../models/operations/create-public-export-job-compat-api-v2-public-exports-post-request.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicExportJobCompatApiV2PublicExportsPostResponse](../../models/operations/create-public-export-job-compat-api-v2-public-exports-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 400, 401, 403, 422       | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicExportJobCompatApiV2PublicExportsJobIdGet

Get Public Export Job Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_export_job_compat_api_v2_public_exports__job_id__get" method="get" path="/v2/public/exports/{job_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.exports.getPublicExportJobCompatApiV2PublicExportsJobIdGet({
    jobId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { exportsGetPublicExportJobCompatApiV2PublicExportsJobIdGet } from "sanka-sdk/funcs/exports-get-public-export-job-compat-api-v2-public-exports-job-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exportsGetPublicExportJobCompatApiV2PublicExportsJobIdGet(sanka, {
    jobId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exportsGetPublicExportJobCompatApiV2PublicExportsJobIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicExportJobCompatApiV2PublicExportsJobIdGetRequest](../../models/operations/get-public-export-job-compat-api-v2-public-exports-job-id-get-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicExportJobCompatApiV2PublicExportsJobIdGetResponse](../../models/operations/get-public-export-job-compat-api-v2-public-exports-job-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## cancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost

Cancel Public Export Job Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel_public_export_job_compat_api_v2_public_exports__job_id__cancel_post" method="post" path="/v2/public/exports/{job_id}/cancel" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.exports.cancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost({
    jobId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { exportsCancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost } from "sanka-sdk/funcs/exports-cancel-public-export-job-compat-api-v2-public-exports-job-id-cancel-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await exportsCancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost(sanka, {
    jobId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exportsCancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPostRequest](../../models/operations/cancel-public-export-job-compat-api-v2-public-exports-job-id-cancel-post-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[operations.CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPostResponse](../../models/operations/cancel-public-export-job-compat-api-v2-public-exports-job-id-cancel-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |