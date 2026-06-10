# Estimates

## Overview

### Available Operations

* [list](#list) - List Public Estimates
* [create](#create) - Create Public Estimate
* [uploadPublicEstimateFileApiV2PublicEstimatesFilesPost](#uploadpublicestimatefileapiv2publicestimatesfilespost) - Upload Public Estimate File
* [get](#get) - Get Public Estimate
* [update](#update) - Update Public Estimate
* [delete](#delete) - Delete Public Estimate
* [downloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet](#downloadpublicestimatepdfapiv2publicestimatesestimateidpdfget) - Download Public Estimate Pdf

## list

List Public Estimates

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_estimates_api_v2_public_estimates_get" method="get" path="/v2/public/estimates" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { estimatesList } from "sanka-sdk/funcs/estimates-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesList(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicEstimatesApiV2PublicEstimatesGetRequest](../../models/operations/list-public-estimates-api-v2-public-estimates-get-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicEstimatesApiV2PublicEstimatesGetResponse](../../models/operations/list-public-estimates-api-v2-public-estimates-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Estimate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_estimate_api_v2_public_estimates_post" method="post" path="/v2/public/estimates" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.create({
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
import { estimatesCreate } from "sanka-sdk/funcs/estimates-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesCreate(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicEstimateApiV2PublicEstimatesPostRequest](../../models/operations/create-public-estimate-api-v2-public-estimates-post-request.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicEstimateApiV2PublicEstimatesPostResponse](../../models/operations/create-public-estimate-api-v2-public-estimates-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## uploadPublicEstimateFileApiV2PublicEstimatesFilesPost

Upload Public Estimate File

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload_public_estimate_file_api_v2_public_estimates_files_post" method="post" path="/v2/public/estimates/files" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.uploadPublicEstimateFileApiV2PublicEstimatesFilesPost({
    body: {
      file: "<value>",
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
import { estimatesUploadPublicEstimateFileApiV2PublicEstimatesFilesPost } from "sanka-sdk/funcs/estimates-upload-public-estimate-file-api-v2-public-estimates-files-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesUploadPublicEstimateFileApiV2PublicEstimatesFilesPost(sanka, {
    body: {
      file: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesUploadPublicEstimateFileApiV2PublicEstimatesFilesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadPublicEstimateFileApiV2PublicEstimatesFilesPostRequest](../../models/operations/upload-public-estimate-file-api-v2-public-estimates-files-post-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadPublicEstimateFileApiV2PublicEstimatesFilesPostResponse](../../models/operations/upload-public-estimate-file-api-v2-public-estimates-files-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Estimate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_estimate_api_v2_public_estimates__estimate_id__get" method="get" path="/v2/public/estimates/{estimate_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.get({
    estimateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { estimatesGet } from "sanka-sdk/funcs/estimates-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesGet(sanka, {
    estimateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicEstimateApiV2PublicEstimatesEstimateIdGetRequest](../../models/operations/get-public-estimate-api-v2-public-estimates-estimate-id-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicEstimateApiV2PublicEstimatesEstimateIdGetResponse](../../models/operations/get-public-estimate-api-v2-public-estimates-estimate-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Estimate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_estimate_api_v2_public_estimates__estimate_id__put" method="put" path="/v2/public/estimates/{estimate_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.update({
    estimateId: "<id>",
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
import { estimatesUpdate } from "sanka-sdk/funcs/estimates-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesUpdate(sanka, {
    estimateId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePublicEstimateApiV2PublicEstimatesEstimateIdPutRequest](../../models/operations/update-public-estimate-api-v2-public-estimates-estimate-id-put-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePublicEstimateApiV2PublicEstimatesEstimateIdPutResponse](../../models/operations/update-public-estimate-api-v2-public-estimates-estimate-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Estimate

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_estimate_api_v2_public_estimates__estimate_id__delete" method="delete" path="/v2/public/estimates/{estimate_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.delete({
    estimateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { estimatesDelete } from "sanka-sdk/funcs/estimates-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesDelete(sanka, {
    estimateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.DeletePublicEstimateApiV2PublicEstimatesEstimateIdDeleteRequest](../../models/operations/delete-public-estimate-api-v2-public-estimates-estimate-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[operations.DeletePublicEstimateApiV2PublicEstimatesEstimateIdDeleteResponse](../../models/operations/delete-public-estimate-api-v2-public-estimates-estimate-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## downloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet

Download Public Estimate Pdf

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download_public_estimate_pdf_api_v2_public_estimates__estimate_id__pdf_get" method="get" path="/v2/public/estimates/{estimate_id}/pdf" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.estimates.downloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet({
    estimateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { estimatesDownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet } from "sanka-sdk/funcs/estimates-download-public-estimate-pdf-api-v2-public-estimates-estimate-id-pdf-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await estimatesDownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet(sanka, {
    estimateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("estimatesDownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.DownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGetRequest](../../models/operations/download-public-estimate-pdf-api-v2-public-estimates-estimate-id-pdf-get-request.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[operations.DownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGetResponse](../../models/operations/download-public-estimate-pdf-api-v2-public-estimates-estimate-id-pdf-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |