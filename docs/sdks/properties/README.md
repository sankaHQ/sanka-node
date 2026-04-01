# Properties

## Overview

### Available Operations

* [list](#list) - List Properties
* [create](#create) - Create Property
* [get](#get) - Retrieve Property
* [update](#update) - Update Property
* [delete](#delete) - Delete Property

## list

List Properties

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_properties_public_api_list_public_properties" method="get" path="/v1/public/properties/{object_name}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.properties.list({
    objectName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { propertiesList } from "sanka-sdk/funcs/properties-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await propertiesList(sanka, {
    objectName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertiesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1PropertiesPublicApiListPublicPropertiesRequest](../../models/operations/api-routers-v1-properties-public-api-list-public-properties-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicPropertySchema[]](../../models/.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PublicPropertyErrorResponse | 400, 403, 404                      | application/json                   |
| errors.PublicPropertyErrorResponse | 500                                | application/json                   |
| errors.SankaDefaultError           | 4XX, 5XX                           | \*/\*                              |

## create

Create Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_properties_public_api_create_public_property" method="post" path="/v1/public/properties/{object_name}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.properties.create({
    objectName: "<value>",
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
import { propertiesCreate } from "sanka-sdk/funcs/properties-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await propertiesCreate(sanka, {
    objectName: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertiesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1PropertiesPublicApiCreatePublicPropertyRequest](../../models/operations/api-routers-v1-properties-public-api-create-public-property-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicPropertyMutationResponse](../../models/public-property-mutation-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PublicPropertyErrorResponse | 400, 403, 404                      | application/json                   |
| errors.PublicPropertyErrorResponse | 500                                | application/json                   |
| errors.SankaDefaultError           | 4XX, 5XX                           | \*/\*                              |

## get

Retrieve Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_properties_public_api_retrieve_public_property" method="get" path="/v1/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.properties.get({
    objectName: "<value>",
    propertyRef: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { propertiesGet } from "sanka-sdk/funcs/properties-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await propertiesGet(sanka, {
    objectName: "<value>",
    propertyRef: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertiesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1PropertiesPublicApiRetrievePublicPropertyRequest](../../models/operations/api-routers-v1-properties-public-api-retrieve-public-property-request.md)    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicPropertySchema](../../models/public-property-schema.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PublicPropertyErrorResponse | 400, 403, 404                      | application/json                   |
| errors.PublicPropertyErrorResponse | 500                                | application/json                   |
| errors.SankaDefaultError           | 4XX, 5XX                           | \*/\*                              |

## update

Update Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_properties_public_api_update_public_property" method="put" path="/v1/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.properties.update({
    objectName: "<value>",
    propertyRef: "<value>",
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
import { propertiesUpdate } from "sanka-sdk/funcs/properties-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await propertiesUpdate(sanka, {
    objectName: "<value>",
    propertyRef: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertiesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1PropertiesPublicApiUpdatePublicPropertyRequest](../../models/operations/api-routers-v1-properties-public-api-update-public-property-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicPropertyMutationResponse](../../models/public-property-mutation-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PublicPropertyErrorResponse | 400, 403, 404                      | application/json                   |
| errors.PublicPropertyErrorResponse | 500                                | application/json                   |
| errors.SankaDefaultError           | 4XX, 5XX                           | \*/\*                              |

## delete

Delete Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_properties_public_api_delete_public_property" method="delete" path="/v1/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.properties.delete({
    objectName: "<value>",
    propertyRef: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { propertiesDelete } from "sanka-sdk/funcs/properties-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await propertiesDelete(sanka, {
    objectName: "<value>",
    propertyRef: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("propertiesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1PropertiesPublicApiDeletePublicPropertyRequest](../../models/operations/api-routers-v1-properties-public-api-delete-public-property-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicPropertyMutationResponse](../../models/public-property-mutation-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PublicPropertyErrorResponse | 400, 403, 404                      | application/json                   |
| errors.PublicPropertyErrorResponse | 500                                | application/json                   |
| errors.SankaDefaultError           | 4XX, 5XX                           | \*/\*                              |