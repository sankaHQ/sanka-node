# Associations

## Overview

### Available Operations

* [listPublicAssociationsApiV2PublicAssociationsGet](#listpublicassociationsapiv2publicassociationsget) - List Public Associations
* [createPublicAssociationApiV2PublicAssociationsPost](#createpublicassociationapiv2publicassociationspost) - Create Public Association
* [deletePublicAssociationApiV2PublicAssociationsDelete](#deletepublicassociationapiv2publicassociationsdelete) - Delete Public Association

## listPublicAssociationsApiV2PublicAssociationsGet

List Public Associations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_associations_api_v2_public_associations_get" method="get" path="/v2/public/associations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.associations.listPublicAssociationsApiV2PublicAssociationsGet({
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
import { associationsListPublicAssociationsApiV2PublicAssociationsGet } from "sanka-sdk/funcs/associations-list-public-associations-api-v2-public-associations-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await associationsListPublicAssociationsApiV2PublicAssociationsGet(sanka, {
    sourceObjectType: "<value>",
    sourceRecordId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("associationsListPublicAssociationsApiV2PublicAssociationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicAssociationsApiV2PublicAssociationsGetRequest](../../models/operations/list-public-associations-api-v2-public-associations-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicAssociationsApiV2PublicAssociationsGetResponse](../../models/operations/list-public-associations-api-v2-public-associations-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicAssociationApiV2PublicAssociationsPost

Create Public Association

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_association_api_v2_public_associations_post" method="post" path="/v2/public/associations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.associations.createPublicAssociationApiV2PublicAssociationsPost({
    body: {
      sourceRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
      targetRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
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
import { associationsCreatePublicAssociationApiV2PublicAssociationsPost } from "sanka-sdk/funcs/associations-create-public-association-api-v2-public-associations-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await associationsCreatePublicAssociationApiV2PublicAssociationsPost(sanka, {
    body: {
      sourceRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
      targetRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("associationsCreatePublicAssociationApiV2PublicAssociationsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicAssociationApiV2PublicAssociationsPostRequest](../../models/operations/create-public-association-api-v2-public-associations-post-request.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicAssociationApiV2PublicAssociationsPostResponse](../../models/operations/create-public-association-api-v2-public-associations-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicAssociationApiV2PublicAssociationsDelete

Delete Public Association

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_association_api_v2_public_associations_delete" method="delete" path="/v2/public/associations" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.associations.deletePublicAssociationApiV2PublicAssociationsDelete({
    body: {
      sourceRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
      targetRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
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
import { associationsDeletePublicAssociationApiV2PublicAssociationsDelete } from "sanka-sdk/funcs/associations-delete-public-association-api-v2-public-associations-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await associationsDeletePublicAssociationApiV2PublicAssociationsDelete(sanka, {
    body: {
      sourceRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
      targetRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("associationsDeletePublicAssociationApiV2PublicAssociationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePublicAssociationApiV2PublicAssociationsDeleteRequest](../../models/operations/delete-public-association-api-v2-public-associations-delete-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePublicAssociationApiV2PublicAssociationsDeleteResponse](../../models/operations/delete-public-association-api-v2-public-associations-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |