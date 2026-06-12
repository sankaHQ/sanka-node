# CustomObjects

## Overview

### Available Operations

* [listRecords](#listrecords) - List Custom Object Records
* [createRecord](#createrecord) - Create Custom Object Record
* [getRecord](#getrecord) - Get Custom Object Record
* [updateRecord](#updaterecord) - Update Custom Object Record
* [deleteRecord](#deleterecord) - Delete Custom Object Record
* [archiveRecord](#archiverecord) - Archive Custom Object Record
* [activateRecord](#activaterecord) - Activate Custom Object Record
* [createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost](#createpubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordspost) - Create Public Custom Object Record Compatibility
* [updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost](#updatepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidpost) - Update Public Custom Object Record Compatibility
* [archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost](#archivepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidarchivepost) - Archive Public Custom Object Record Compatibility

## listRecords

List Custom Object Records

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_custom_object_records_api_v2_public_custom_objects__custom_object_id__records_get" method="get" path="/v2/public/custom-objects/{custom_object_id}/records" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.listRecords({
    customObjectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { customObjectsListRecords } from "sanka-sdk/funcs/custom-objects-list-records.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsListRecords(sanka, {
    customObjectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsListRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                         | [operations.ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGetRequest](../../models/operations/list-public-custom-object-records-api-v2-public-custom-objects-custom-object-id-records-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                    |
| `options.retries`                                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                  |

### Response

**Promise\<[operations.ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGetResponse](../../models/operations/list-public-custom-object-records-api-v2-public-custom-objects-custom-object-id-records-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createRecord

Create Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records_post" method="post" path="/v2/public/custom-objects/{custom_object_id}/records" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.createRecord({
    customObjectId: "<id>",
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
import { customObjectsCreateRecord } from "sanka-sdk/funcs/custom-objects-create-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsCreateRecord(sanka, {
    customObjectId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsCreateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                             | [operations.CreatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsPostRequest](../../models/operations/create-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                        |
| `options.retries`                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                      |

### Response

**Promise\<[operations.CreatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsPostResponse](../../models/operations/create-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getRecord

Get Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records__record_id__get" method="get" path="/v2/public/custom-objects/{custom_object_id}/records/{record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.getRecord({
    customObjectId: "<id>",
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
import { customObjectsGetRecord } from "sanka-sdk/funcs/custom-objects-get-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsGetRecord(sanka, {
    customObjectId: "<id>",
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsGetRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                       | [operations.GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGetRequest](../../models/operations/get-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                  |
| `options.retries`                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                |

### Response

**Promise\<[operations.GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGetResponse](../../models/operations/get-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updateRecord

Update Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records__record_id__put" method="put" path="/v2/public/custom-objects/{custom_object_id}/records/{record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.updateRecord({
    customObjectId: "<id>",
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
import { customObjectsUpdateRecord } from "sanka-sdk/funcs/custom-objects-update-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsUpdateRecord(sanka, {
    customObjectId: "<id>",
    recordId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsUpdateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                             | [operations.UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutRequest](../../models/operations/update-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                        |
| `options.retries`                                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                      |

### Response

**Promise\<[operations.UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutResponse](../../models/operations/update-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteRecord

Delete Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records__record_id__delete" method="delete" path="/v2/public/custom-objects/{custom_object_id}/records/{record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.deleteRecord({
    customObjectId: "<id>",
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
import { customObjectsDeleteRecord } from "sanka-sdk/funcs/custom-objects-delete-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsDeleteRecord(sanka, {
    customObjectId: "<id>",
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsDeleteRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                   | [operations.DeletePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdDeleteRequest](../../models/operations/delete-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                              |
| `options.retries`                                                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                            |

### Response

**Promise\<[operations.DeletePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdDeleteResponse](../../models/operations/delete-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## archiveRecord

Archive Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archive_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records__record_id__archive_post" method="post" path="/v2/public/custom-objects/{custom_object_id}/records/{record_id}/archive" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.archiveRecord({
    customObjectId: "<id>",
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
import { customObjectsArchiveRecord } from "sanka-sdk/funcs/custom-objects-archive-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsArchiveRecord(sanka, {
    customObjectId: "<id>",
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsArchiveRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                                | [operations.ArchivePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdArchivePostRequest](../../models/operations/archive-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-archive-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                           |
| `options.retries`                                                                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                         |

### Response

**Promise\<[operations.ArchivePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdArchivePostResponse](../../models/operations/archive-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-archive-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## activateRecord

Activate Custom Object Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="activate_public_custom_object_record_api_v2_public_custom_objects__custom_object_id__records__record_id__activate_post" method="post" path="/v2/public/custom-objects/{custom_object_id}/records/{record_id}/activate" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.customObjects.activateRecord({
    customObjectId: "<id>",
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
import { customObjectsActivateRecord } from "sanka-sdk/funcs/custom-objects-activate-record.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customObjectsActivateRecord(sanka, {
    customObjectId: "<id>",
    recordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customObjectsActivateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                                    | [operations.ActivatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdActivatePostRequest](../../models/operations/activate-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-activate-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                               |
| `options.retries`                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                             |

### Response

**Promise\<[operations.ActivatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdActivatePostResponse](../../models/operations/activate-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-activate-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

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