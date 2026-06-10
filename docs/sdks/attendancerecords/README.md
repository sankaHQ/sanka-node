# AttendanceRecords

## Overview

### Available Operations

* [listPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet](#listpublicattendancerecordsapiv2publicattendancerecordsget) - List Public Attendance Records
* [createPublicAttendanceRecordApiV2PublicAttendanceRecordsPost](#createpublicattendancerecordapiv2publicattendancerecordspost) - Create Public Attendance Record
* [getPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet](#getpublicattendancerecordapiv2publicattendancerecordsattendancerecordidget) - Get Public Attendance Record
* [updatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut](#updatepublicattendancerecordapiv2publicattendancerecordsattendancerecordidput) - Update Public Attendance Record
* [deletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete](#deletepublicattendancerecordapiv2publicattendancerecordsattendancerecordiddelete) - Delete Public Attendance Record

## listPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet

List Public Attendance Records

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_attendance_records_api_v2_public_attendance_records_get" method="get" path="/v2/public/attendance-records" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.attendanceRecords.listPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { attendanceRecordsListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet } from "sanka-sdk/funcs/attendance-records-list-public-attendance-records-api-v2-public-attendance-records-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await attendanceRecordsListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attendanceRecordsListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGetRequest](../../models/operations/list-public-attendance-records-api-v2-public-attendance-records-get-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGetResponse](../../models/operations/list-public-attendance-records-api-v2-public-attendance-records-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicAttendanceRecordApiV2PublicAttendanceRecordsPost

Create Public Attendance Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_attendance_record_api_v2_public_attendance_records_post" method="post" path="/v2/public/attendance-records" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.attendanceRecords.createPublicAttendanceRecordApiV2PublicAttendanceRecordsPost({
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
import { attendanceRecordsCreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPost } from "sanka-sdk/funcs/attendance-records-create-public-attendance-record-api-v2-public-attendance-records-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await attendanceRecordsCreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPost(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attendanceRecordsCreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPostRequest](../../models/operations/create-public-attendance-record-api-v2-public-attendance-records-post-request.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPostResponse](../../models/operations/create-public-attendance-record-api-v2-public-attendance-records-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet

Get Public Attendance Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_attendance_record_api_v2_public_attendance_records__attendance_record_id__get" method="get" path="/v2/public/attendance-records/{attendance_record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.attendanceRecords.getPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet({
    attendanceRecordId: "<id>",
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
  attendanceRecordsGetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet,
} from "sanka-sdk/funcs/attendance-records-get-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await attendanceRecordsGetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet(sanka, {
    attendanceRecordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attendanceRecordsGetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                 | [operations.GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGetRequest](../../models/operations/get-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                            |
| `options.retries`                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                          |

### Response

**Promise\<[operations.GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGetResponse](../../models/operations/get-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut

Update Public Attendance Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_attendance_record_api_v2_public_attendance_records__attendance_record_id__put" method="put" path="/v2/public/attendance-records/{attendance_record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.attendanceRecords.updatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut({
    attendanceRecordId: "<id>",
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
  attendanceRecordsUpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut,
} from "sanka-sdk/funcs/attendance-records-update-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-put.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await attendanceRecordsUpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut(sanka, {
    attendanceRecordId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attendanceRecordsUpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                       | [operations.UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutRequest](../../models/operations/update-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |

### Response

**Promise\<[operations.UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutResponse](../../models/operations/update-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete

Delete Public Attendance Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_attendance_record_api_v2_public_attendance_records__attendance_record_id__delete" method="delete" path="/v2/public/attendance-records/{attendance_record_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.attendanceRecords.deletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete({
    attendanceRecordId: "<id>",
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
  attendanceRecordsDeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete,
} from "sanka-sdk/funcs/attendance-records-delete-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await attendanceRecordsDeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete(sanka, {
    attendanceRecordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attendanceRecordsDeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                             | [operations.DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDeleteRequest](../../models/operations/delete-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                        |
| `options.retries`                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                      |

### Response

**Promise\<[operations.DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDeleteResponse](../../models/operations/delete-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |