# CustomObjects

## Overview

### Available Operations

* [createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost](#createpubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordspost) - Create Public Custom Object Record Compatibility
* [updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost](#updatepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidpost) - Update Public Custom Object Record Compatibility
* [archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost](#archivepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidarchivepost) - Archive Public Custom Object Record Compatibility

## createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost

Create Public Custom Object Record Compatibility

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_custom_object_record_compatibility_api_v2_public_records_custom_objects_records_post" method="post" path="/v2/public/records/custom-objects/records" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost({
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
  customObjectsCreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost,
} from "sanka-sdk/funcs/custom-objects-create-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsCreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsCreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                        | [operations.CreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPostRequest](../../models/operations/create-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                   |
| `options.retries`                                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                 |

### Response

**Promise\<[operations.CreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPostResponse](../../models/operations/create-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost

Update Public Custom Object Record Compatibility

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_custom_object_record_compatibility_api_v2_public_records_custom_objects_records__record_id__post" method="post" path="/v2/public/records/custom-objects/records/{record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost({
    recordId: "<id>",
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
  customObjectsUpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost,
} from "sanka-sdk/funcs/custom-objects-update-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsUpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost(sanka, {
    recordId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsUpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                          | [operations.UpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPostRequest](../../models/operations/update-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                     |
| `options.retries`                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                   |

### Response

**Promise\<[operations.UpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPostResponse](../../models/operations/update-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost

Archive Public Custom Object Record Compatibility

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archive_public_custom_object_record_compatibility_api_v2_public_records_custom_objects_records__record_id__archive_post" method="post" path="/v2/public/records/custom-objects/records/{record_id}/archive" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost({
    recordId: "<id>",
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
  customObjectsArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost,
} from "sanka-sdk/funcs/custom-objects-archive-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-archive-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost(sanka, {
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                                           | [operations.ArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePostRequest](../../models/operations/archive-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-archive-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                      |
| `options.retries`                                                                                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.ArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePostResponse](../../models/operations/archive-public-custom-object-record-compatibility-api-v2-public-records-custom-objects-records-record-id-archive-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |