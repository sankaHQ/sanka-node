# FerryDiagrams

## Overview

### Available Operations

* [listPublicFerryDiagramsApiV2PublicFerryDiagramsGet](#listpublicferrydiagramsapiv2publicferrydiagramsget) - List Public Ferry Diagrams
* [createPublicFerryDiagramApiV2PublicFerryDiagramsPost](#createpublicferrydiagramapiv2publicferrydiagramspost) - Create Public Ferry Diagram
* [getPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet](#getpublicferrydiagramapiv2publicferrydiagramsdiagramidget) - Get Public Ferry Diagram
* [updatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut](#updatepublicferrydiagramapiv2publicferrydiagramsdiagramidput) - Update Public Ferry Diagram
* [deletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete](#deletepublicferrydiagramapiv2publicferrydiagramsdiagramiddelete) - Delete Public Ferry Diagram

## listPublicFerryDiagramsApiV2PublicFerryDiagramsGet

List Public Ferry Diagrams

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_ferry_diagrams_api_v2_public_ferry_diagrams_get" method="get" path="/v2/public/ferry/diagrams" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryDiagrams.listPublicFerryDiagramsApiV2PublicFerryDiagramsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ferryDiagramsListPublicFerryDiagramsApiV2PublicFerryDiagramsGet } from "sanka-sdk/funcs/ferry-diagrams-list-public-ferry-diagrams-api-v2-public-ferry-diagrams-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryDiagramsListPublicFerryDiagramsApiV2PublicFerryDiagramsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryDiagramsListPublicFerryDiagramsApiV2PublicFerryDiagramsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicFerryDiagramsApiV2PublicFerryDiagramsGetRequest](../../models/operations/list-public-ferry-diagrams-api-v2-public-ferry-diagrams-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicFerryDiagramsApiV2PublicFerryDiagramsGetResponse](../../models/operations/list-public-ferry-diagrams-api-v2-public-ferry-diagrams-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicFerryDiagramApiV2PublicFerryDiagramsPost

Create Public Ferry Diagram

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_ferry_diagram_api_v2_public_ferry_diagrams_post" method="post" path="/v2/public/ferry/diagrams" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryDiagrams.createPublicFerryDiagramApiV2PublicFerryDiagramsPost({
    body: {
      name: "<value>",
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
import { ferryDiagramsCreatePublicFerryDiagramApiV2PublicFerryDiagramsPost } from "sanka-sdk/funcs/ferry-diagrams-create-public-ferry-diagram-api-v2-public-ferry-diagrams-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryDiagramsCreatePublicFerryDiagramApiV2PublicFerryDiagramsPost(sanka, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryDiagramsCreatePublicFerryDiagramApiV2PublicFerryDiagramsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicFerryDiagramApiV2PublicFerryDiagramsPostRequest](../../models/operations/create-public-ferry-diagram-api-v2-public-ferry-diagrams-post-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicFerryDiagramApiV2PublicFerryDiagramsPostResponse](../../models/operations/create-public-ferry-diagram-api-v2-public-ferry-diagrams-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet

Get Public Ferry Diagram

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_ferry_diagram_api_v2_public_ferry_diagrams__diagram_id__get" method="get" path="/v2/public/ferry/diagrams/{diagram_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryDiagrams.getPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet({
    diagramId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ferryDiagramsGetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet } from "sanka-sdk/funcs/ferry-diagrams-get-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryDiagramsGetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet(sanka, {
    diagramId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryDiagramsGetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGetRequest](../../models/operations/get-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGetResponse](../../models/operations/get-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut

Update Public Ferry Diagram

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_ferry_diagram_api_v2_public_ferry_diagrams__diagram_id__put" method="put" path="/v2/public/ferry/diagrams/{diagram_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryDiagrams.updatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut({
    diagramId: "<id>",
    body: {
      name: "<value>",
      revision: 179232,
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
import { ferryDiagramsUpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut } from "sanka-sdk/funcs/ferry-diagrams-update-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-put.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryDiagramsUpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut(sanka, {
    diagramId: "<id>",
    body: {
      name: "<value>",
      revision: 179232,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryDiagramsUpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPutRequest](../../models/operations/update-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPutResponse](../../models/operations/update-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete

Delete Public Ferry Diagram

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_ferry_diagram_api_v2_public_ferry_diagrams__diagram_id__delete" method="delete" path="/v2/public/ferry/diagrams/{diagram_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ferryDiagrams.deletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete({
    diagramId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ferryDiagramsDeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete } from "sanka-sdk/funcs/ferry-diagrams-delete-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ferryDiagramsDeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete(sanka, {
    diagramId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ferryDiagramsDeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDeleteRequest](../../models/operations/delete-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDeleteResponse](../../models/operations/delete-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |