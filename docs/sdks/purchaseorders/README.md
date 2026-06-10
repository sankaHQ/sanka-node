# PurchaseOrders

## Overview

### Available Operations

* [list](#list) - List Public Purchase Orders
* [create](#create) - Create Public Purchase Order
* [get](#get) - Get Public Purchase Order
* [update](#update) - Update Public Purchase Order
* [delete](#delete) - Delete Public Purchase Order
* [uploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost](#uploadpublicpurchaseorderfileapiv2publicpurchaseordersfilespost) - Upload Public Purchase Order File
* [downloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet](#downloadpublicpurchaseorderpdfapiv2publicpurchaseorderspurchaseorderidpdfget) - Download Public Purchase Order Pdf

## list

List Public Purchase Orders

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_purchase_orders_api_v2_public_purchase_orders_get" method="get" path="/v2/public/purchase-orders" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { purchaseOrdersList } from "sanka-sdk/funcs/purchase-orders-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersList(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetRequest](../../models/operations/list-public-purchase-orders-api-v2-public-purchase-orders-get-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse](../../models/operations/list-public-purchase-orders-api-v2-public-purchase-orders-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Purchase Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_purchase_order_api_v2_public_purchase_orders_post" method="post" path="/v2/public/purchase-orders" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.create({
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
import { purchaseOrdersCreate } from "sanka-sdk/funcs/purchase-orders-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersCreate(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPostRequest](../../models/operations/create-public-purchase-order-api-v2-public-purchase-orders-post-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPostResponse](../../models/operations/create-public-purchase-order-api-v2-public-purchase-orders-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Purchase Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_purchase_order_api_v2_public_purchase_orders__purchase_order_id__get" method="get" path="/v2/public/purchase-orders/{purchase_order_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.get({
    purchaseOrderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { purchaseOrdersGet } from "sanka-sdk/funcs/purchase-orders-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersGet(sanka, {
    purchaseOrderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                               | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                               | [operations.GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGetRequest](../../models/operations/get-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                          |
| `options.retries`                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                        |

### Response

**Promise\<[operations.GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGetResponse](../../models/operations/get-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Purchase Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_purchase_order_api_v2_public_purchase_orders__purchase_order_id__put" method="put" path="/v2/public/purchase-orders/{purchase_order_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.update({
    purchaseOrderId: "<id>",
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
import { purchaseOrdersUpdate } from "sanka-sdk/funcs/purchase-orders-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersUpdate(sanka, {
    purchaseOrderId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                     | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                     | [operations.UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutRequest](../../models/operations/update-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                                    |
| `options`                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                |
| `options.retries`                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                              |

### Response

**Promise\<[operations.UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutResponse](../../models/operations/update-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Purchase Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_purchase_order_api_v2_public_purchase_orders__purchase_order_id__delete" method="delete" path="/v2/public/purchase-orders/{purchase_order_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.delete({
    purchaseOrderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { purchaseOrdersDelete } from "sanka-sdk/funcs/purchase-orders-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersDelete(sanka, {
    purchaseOrderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                           | [operations.DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDeleteRequest](../../models/operations/delete-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                                          |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |

### Response

**Promise\<[operations.DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDeleteResponse](../../models/operations/delete-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## uploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost

Upload Public Purchase Order File

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload_public_purchase_order_file_api_v2_public_purchase_orders_files_post" method="post" path="/v2/public/purchase-orders/files" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.uploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost({
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
import { purchaseOrdersUploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost } from "sanka-sdk/funcs/purchase-orders-upload-public-purchase-order-file-api-v2-public-purchase-orders-files-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersUploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost(sanka, {
    body: {
      file: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersUploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.UploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPostRequest](../../models/operations/upload-public-purchase-order-file-api-v2-public-purchase-orders-files-post-request.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.UploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPostResponse](../../models/operations/upload-public-purchase-order-file-api-v2-public-purchase-orders-files-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## downloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet

Download Public Purchase Order Pdf

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download_public_purchase_order_pdf_api_v2_public_purchase_orders__purchase_order_id__pdf_get" method="get" path="/v2/public/purchase-orders/{purchase_order_id}/pdf" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.purchaseOrders.downloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet({
    purchaseOrderId: "<id>",
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
  purchaseOrdersDownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet,
} from "sanka-sdk/funcs/purchase-orders-download-public-purchase-order-pdf-api-v2-public-purchase-orders-purchase-order-id-pdf-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchaseOrdersDownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet(sanka, {
    purchaseOrderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchaseOrdersDownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                       | [operations.DownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGetRequest](../../models/operations/download-public-purchase-order-pdf-api-v2-public-purchase-orders-purchase-order-id-pdf-get-request.md) | :heavy_check_mark:                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |

### Response

**Promise\<[operations.DownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGetResponse](../../models/operations/download-public-purchase-order-pdf-api-v2-public-purchase-orders-purchase-order-id-pdf-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |