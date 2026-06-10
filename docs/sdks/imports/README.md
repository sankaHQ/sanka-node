# Imports

## Overview

### Available Operations

* [listPublicImportJobsCompatApiV2PublicImportsGet](#listpublicimportjobscompatapiv2publicimportsget) - List Public Import Jobs Compat
* [createPublicImportJobCompatApiV2PublicImportsPost](#createpublicimportjobcompatapiv2publicimportspost) - Create Public Import Job Compat
* [getPublicImportJobCompatApiV2PublicImportsJobIdGet](#getpublicimportjobcompatapiv2publicimportsjobidget) - Get Public Import Job Compat
* [cancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost](#cancelpublicimportjobcompatapiv2publicimportsjobidcancelpost) - Cancel Public Import Job Compat

## listPublicImportJobsCompatApiV2PublicImportsGet

List Public Import Jobs Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_import_jobs_compat_api_v2_public_imports_get" method="get" path="/v2/public/imports" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.imports.listPublicImportJobsCompatApiV2PublicImportsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { importsListPublicImportJobsCompatApiV2PublicImportsGet } from "sanka-sdk/funcs/imports-list-public-import-jobs-compat-api-v2-public-imports-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await importsListPublicImportJobsCompatApiV2PublicImportsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("importsListPublicImportJobsCompatApiV2PublicImportsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicImportJobsCompatApiV2PublicImportsGetRequest](../../models/operations/list-public-import-jobs-compat-api-v2-public-imports-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicImportJobsCompatApiV2PublicImportsGetResponse](../../models/operations/list-public-import-jobs-compat-api-v2-public-imports-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicImportJobCompatApiV2PublicImportsPost

Create Public Import Job Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_import_job_compat_api_v2_public_imports_post" method="post" path="/v2/public/imports" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.imports.createPublicImportJobCompatApiV2PublicImportsPost({
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
import { importsCreatePublicImportJobCompatApiV2PublicImportsPost } from "sanka-sdk/funcs/imports-create-public-import-job-compat-api-v2-public-imports-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await importsCreatePublicImportJobCompatApiV2PublicImportsPost(sanka, {
    body: {
      objectType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("importsCreatePublicImportJobCompatApiV2PublicImportsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicImportJobCompatApiV2PublicImportsPostRequest](../../models/operations/create-public-import-job-compat-api-v2-public-imports-post-request.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicImportJobCompatApiV2PublicImportsPostResponse](../../models/operations/create-public-import-job-compat-api-v2-public-imports-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicImportJobCompatApiV2PublicImportsJobIdGet

Get Public Import Job Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_import_job_compat_api_v2_public_imports__job_id__get" method="get" path="/v2/public/imports/{job_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.imports.getPublicImportJobCompatApiV2PublicImportsJobIdGet({
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
import { importsGetPublicImportJobCompatApiV2PublicImportsJobIdGet } from "sanka-sdk/funcs/imports-get-public-import-job-compat-api-v2-public-imports-job-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await importsGetPublicImportJobCompatApiV2PublicImportsJobIdGet(sanka, {
    jobId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("importsGetPublicImportJobCompatApiV2PublicImportsJobIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicImportJobCompatApiV2PublicImportsJobIdGetRequest](../../models/operations/get-public-import-job-compat-api-v2-public-imports-job-id-get-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicImportJobCompatApiV2PublicImportsJobIdGetResponse](../../models/operations/get-public-import-job-compat-api-v2-public-imports-job-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## cancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost

Cancel Public Import Job Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel_public_import_job_compat_api_v2_public_imports__job_id__cancel_post" method="post" path="/v2/public/imports/{job_id}/cancel" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.imports.cancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost({
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
import { importsCancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost } from "sanka-sdk/funcs/imports-cancel-public-import-job-compat-api-v2-public-imports-job-id-cancel-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await importsCancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost(sanka, {
    jobId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("importsCancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPostRequest](../../models/operations/cancel-public-import-job-compat-api-v2-public-imports-job-id-cancel-post-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[operations.CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPostResponse](../../models/operations/cancel-public-import-job-compat-api-v2-public-imports-job-id-cancel-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |