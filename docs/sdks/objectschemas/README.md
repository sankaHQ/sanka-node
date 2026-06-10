# ObjectSchemas

## Overview

### Available Operations

* [listPublicObjectSchemasApiV2PublicObjectSchemasGet](#listpublicobjectschemasapiv2publicobjectschemasget) - List Public Object Schemas
* [mutatePublicObjectSchemaApiV2PublicObjectSchemasPost](#mutatepublicobjectschemaapiv2publicobjectschemaspost) - Mutate Public Object Schema

## listPublicObjectSchemasApiV2PublicObjectSchemasGet

List Public Object Schemas

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_object_schemas_api_v2_public_object_schemas_get" method="get" path="/v2/public/object-schemas" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.objectSchemas.listPublicObjectSchemasApiV2PublicObjectSchemasGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { objectSchemasListPublicObjectSchemasApiV2PublicObjectSchemasGet } from "sanka-sdk/funcs/object-schemas-list-public-object-schemas-api-v2-public-object-schemas-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await objectSchemasListPublicObjectSchemasApiV2PublicObjectSchemasGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectSchemasListPublicObjectSchemasApiV2PublicObjectSchemasGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicObjectSchemasApiV2PublicObjectSchemasGetRequest](../../models/operations/list-public-object-schemas-api-v2-public-object-schemas-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicObjectSchemasApiV2PublicObjectSchemasGetResponse](../../models/operations/list-public-object-schemas-api-v2-public-object-schemas-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## mutatePublicObjectSchemaApiV2PublicObjectSchemasPost

Mutate Public Object Schema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="mutate_public_object_schema_api_v2_public_object_schemas_post" method="post" path="/v2/public/object-schemas" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.objectSchemas.mutatePublicObjectSchemaApiV2PublicObjectSchemasPost({
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
import { objectSchemasMutatePublicObjectSchemaApiV2PublicObjectSchemasPost } from "sanka-sdk/funcs/object-schemas-mutate-public-object-schema-api-v2-public-object-schemas-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await objectSchemasMutatePublicObjectSchemaApiV2PublicObjectSchemasPost(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectSchemasMutatePublicObjectSchemaApiV2PublicObjectSchemasPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MutatePublicObjectSchemaApiV2PublicObjectSchemasPostRequest](../../models/operations/mutate-public-object-schema-api-v2-public-object-schemas-post-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MutatePublicObjectSchemaApiV2PublicObjectSchemasPostResponse](../../models/operations/mutate-public-object-schema-api-v2-public-object-schemas-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |