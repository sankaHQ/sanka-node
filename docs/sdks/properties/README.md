# Properties

## Overview

### Available Operations

* [list](#list) - List Public Developer Properties
* [create](#create) - Create Public Developer Property
* [get](#get) - Retrieve Public Developer Property
* [update](#update) - Update Public Developer Property
* [delete](#delete) - Delete Public Developer Property

## list

List Public Developer Properties

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_developer_properties_api_v2_public_properties__object_name__get" method="get" path="/v2/public/properties/{object_name}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                         | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                         | [operations.ListPublicDeveloperPropertiesApiV2PublicPropertiesObjectNameGetRequest](../../models/operations/list-public-developer-properties-api-v2-public-properties-object-name-get-request.md) | :heavy_check_mark:                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                    |
| `options.retries`                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                  |

### Response

**Promise\<[operations.ListPublicDeveloperPropertiesApiV2PublicPropertiesObjectNameGetResponse](../../models/operations/list-public-developer-properties-api-v2-public-properties-object-name-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Developer Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_developer_property_api_v2_public_properties__object_name__post" method="post" path="/v2/public/properties/{object_name}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                           | [operations.CreatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePostRequest](../../models/operations/create-public-developer-property-api-v2-public-properties-object-name-post-request.md) | :heavy_check_mark:                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[operations.CreatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePostResponse](../../models/operations/create-public-developer-property-api-v2-public-properties-object-name-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Retrieve Public Developer Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="retrieve_public_developer_property_api_v2_public_properties__object_name___property_ref__get" method="get" path="/v2/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                     | [operations.RetrievePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefGetRequest](../../models/operations/retrieve-public-developer-property-api-v2-public-properties-object-name-property-ref-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                |
| `options.retries`                                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                              |

### Response

**Promise\<[operations.RetrievePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefGetResponse](../../models/operations/retrieve-public-developer-property-api-v2-public-properties-object-name-property-ref-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Developer Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_developer_property_api_v2_public_properties__object_name___property_ref__put" method="put" path="/v2/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                 | [operations.UpdatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefPutRequest](../../models/operations/update-public-developer-property-api-v2-public-properties-object-name-property-ref-put-request.md) | :heavy_check_mark:                                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                            |
| `options.retries`                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                          |

### Response

**Promise\<[operations.UpdatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefPutResponse](../../models/operations/update-public-developer-property-api-v2-public-properties-object-name-property-ref-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Developer Property

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_developer_property_api_v2_public_properties__object_name___property_ref__delete" method="delete" path="/v2/public/properties/{object_name}/{property_ref}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                       | [operations.DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDeleteRequest](../../models/operations/delete-public-developer-property-api-v2-public-properties-object-name-property-ref-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |

### Response

**Promise\<[operations.DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDeleteResponse](../../models/operations/delete-public-developer-property-api-v2-public-properties-object-name-property-ref-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |