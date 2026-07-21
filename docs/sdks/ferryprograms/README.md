# FerryPrograms

## Overview

### Available Operations

* [listPublicFerryProgramsApiV2PublicFerryProgramsGet](#listpublicferryprogramsapiv2publicferryprogramsget) - List Public Ferry Programs
* [getPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet](#getpublicferryprogramapiv2publicferryprogramsprogramidget) - Get Public Ferry Program
* [listPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet](#listpublicferryprogrammeetingsapiv2publicferryprogramsprogramidmeetingsget) - List Public Ferry Program Meetings
* [createPublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost](#createpublicferryprogrammeetingapiv2publicferryprogramsprogramidmeetingspost) - Create Public Ferry Program Meeting
* [updatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch](#updatepublicferryprogrammeetingapiv2publicferryprogramsprogramidmeetingsmeetingidpatch) - Update Public Ferry Program Meeting
* [createPublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost](#createpublicferryprogramtodoapiv2publicferryprogramsprogramidtodospost) - Create Public Ferry Program Todo
* [batchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost](#batchupsertpublicferryprogramtodosapiv2publicferryprogramsprogramidtodosbatchupsertpost) - Batch Upsert Public Ferry Program Todos
* [updatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch](#updatepublicferryprogramtodoapiv2publicferryprogramsprogramidtodostodoidpatch) - Update Public Ferry Program Todo
* [deletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete](#deletepublicferryprogramtodoapiv2publicferryprogramsprogramidtodostodoiddelete) - Delete Public Ferry Program Todo

## listPublicFerryProgramsApiV2PublicFerryProgramsGet

List Public Ferry Programs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_ferry_programs_api_v2_public_ferry_programs_get" method="get" path="/v2/public/ferry/programs" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.listPublicFerryProgramsApiV2PublicFerryProgramsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ferryProgramsListPublicFerryProgramsApiV2PublicFerryProgramsGet } from "sanka-sdk/funcs/ferry-programs-list-public-ferry-programs-api-v2-public-ferry-programs-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsListPublicFerryProgramsApiV2PublicFerryProgramsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsListPublicFerryProgramsApiV2PublicFerryProgramsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicFerryProgramsApiV2PublicFerryProgramsGetRequest](../../models/operations/list-public-ferry-programs-api-v2-public-ferry-programs-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicFerryProgramsApiV2PublicFerryProgramsGetResponse](../../models/operations/list-public-ferry-programs-api-v2-public-ferry-programs-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet

Get Public Ferry Program

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_ferry_program_api_v2_public_ferry_programs__program_id__get" method="get" path="/v2/public/ferry/programs/{program_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.getPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet({
    programId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ferryProgramsGetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet } from "sanka-sdk/funcs/ferry-programs-get-public-ferry-program-api-v2-public-ferry-programs-program-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsGetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet(sanka, {
    programId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsGetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGetRequest](../../models/operations/get-public-ferry-program-api-v2-public-ferry-programs-program-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGetResponse](../../models/operations/get-public-ferry-program-api-v2-public-ferry-programs-program-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet

List Public Ferry Program Meetings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_ferry_program_meetings_api_v2_public_ferry_programs__program_id__meetings_get" method="get" path="/v2/public/ferry/programs/{program_id}/meetings" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.listPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet({
    programId: "<id>",
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
  ferryProgramsListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet,
} from "sanka-sdk/funcs/ferry-programs-list-public-ferry-program-meetings-api-v2-public-ferry-programs-program-id-meetings-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet(sanka, {
    programId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGetRequest](../../models/operations/list-public-ferry-program-meetings-api-v2-public-ferry-programs-program-id-meetings-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<[operations.ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGetResponse](../../models/operations/list-public-ferry-program-meetings-api-v2-public-ferry-programs-program-id-meetings-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost

Create Public Ferry Program Meeting

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_ferry_program_meeting_api_v2_public_ferry_programs__program_id__meetings_post" method="post" path="/v2/public/ferry/programs/{program_id}/meetings" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.createPublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost({
    programId: "<id>",
    body: {
      title: "<value>",
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
  ferryProgramsCreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost,
} from "sanka-sdk/funcs/ferry-programs-create-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsCreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost(sanka, {
    programId: "<id>",
    body: {
      title: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsCreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostRequest](../../models/operations/create-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                 |
| `options.retries`                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                               |

### Response

**Promise\<[operations.CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostResponse](../../models/operations/create-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch

Update Public Ferry Program Meeting

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_ferry_program_meeting_api_v2_public_ferry_programs__program_id__meetings__meeting_id__patch" method="patch" path="/v2/public/ferry/programs/{program_id}/meetings/{meeting_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.updatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch({
    programId: "<id>",
    meetingId: "<id>",
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
  ferryProgramsUpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch,
} from "sanka-sdk/funcs/ferry-programs-update-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-meeting-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsUpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch(sanka, {
    programId: "<id>",
    meetingId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsUpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                            | [operations.UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchRequest](../../models/operations/update-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-meeting-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                       |
| `options.retries`                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                     |

### Response

**Promise\<[operations.UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchResponse](../../models/operations/update-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-meeting-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost

Create Public Ferry Program Todo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_ferry_program_todo_api_v2_public_ferry_programs__program_id__todos_post" method="post" path="/v2/public/ferry/programs/{program_id}/todos" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.createPublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost({
    programId: "<id>",
    body: {
      title: "<value>",
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
  ferryProgramsCreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost,
} from "sanka-sdk/funcs/ferry-programs-create-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsCreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost(sanka, {
    programId: "<id>",
    body: {
      title: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsCreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostRequest](../../models/operations/create-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<[operations.CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostResponse](../../models/operations/create-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## batchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost

Batch Upsert Public Ferry Program Todos

### Example Usage

<!-- UsageSnippet language="typescript" operationID="batch_upsert_public_ferry_program_todos_api_v2_public_ferry_programs__program_id__todos_batch_upsert_post" method="post" path="/v2/public/ferry/programs/{program_id}/todos/batch-upsert" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.batchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost({
    programId: "<id>",
    body: {
      todos: [
        {
          title: "<value>",
        },
      ],
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
  ferryProgramsBatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost,
} from "sanka-sdk/funcs/ferry-programs-batch-upsert-public-ferry-program-todos-api-v2-public-ferry-programs-program-id-todos-batch-upsert-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsBatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost(sanka, {
    programId: "<id>",
    body: {
      todos: [
        {
          title: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsBatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                               | [operations.BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostRequest](../../models/operations/batch-upsert-public-ferry-program-todos-api-v2-public-ferry-programs-program-id-todos-batch-upsert-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                                                              |
| `options`                                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                          |
| `options.retries`                                                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                        |

### Response

**Promise\<[operations.BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostResponse](../../models/operations/batch-upsert-public-ferry-program-todos-api-v2-public-ferry-programs-program-id-todos-batch-upsert-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch

Update Public Ferry Program Todo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_ferry_program_todo_api_v2_public_ferry_programs__program_id__todos__todo_id__patch" method="patch" path="/v2/public/ferry/programs/{program_id}/todos/{todo_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.updatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch({
    programId: "<id>",
    todoId: "<id>",
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
  ferryProgramsUpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch,
} from "sanka-sdk/funcs/ferry-programs-update-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsUpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch(sanka, {
    programId: "<id>",
    todoId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsUpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchRequest](../../models/operations/update-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                     |
| `options.retries`                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                   |

### Response

**Promise\<[operations.UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchResponse](../../models/operations/update-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete

Delete Public Ferry Program Todo

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_ferry_program_todo_api_v2_public_ferry_programs__program_id__todos__todo_id__delete" method="delete" path="/v2/public/ferry/programs/{program_id}/todos/{todo_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryPrograms.deletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete({
    programId: "<id>",
    todoId: "<id>",
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
  ferryProgramsDeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete,
} from "sanka-sdk/funcs/ferry-programs-delete-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryProgramsDeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete(sanka, {
    programId: "<id>",
    todoId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryProgramsDeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDeleteRequest](../../models/operations/delete-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<[operations.DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDeleteResponse](../../models/operations/delete-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |