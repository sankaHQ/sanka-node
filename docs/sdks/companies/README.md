# Companies

## Overview

### Available Operations

* [list](#list) - List Public Companies
* [create](#create) - Create Public Company
* [get](#get) - Get Public Company
* [update](#update) - Update Public Company
* [delete](#delete) - Delete Public Company
* [getPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet](#getpubliccompanypricetableapiv2publiccompaniescompanyidpricetableget) - Get Public Company Price Table
* [updatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch](#updatepubliccompanypricetablecompanyapiv2publiccompaniescompanyidpricetablecompanypatch) - Update Public Company Price Table Company
* [applyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost](#applypubliccompanypricetableitemsapiv2publiccompaniescompanyidpricetableitemsapplyallpost) - Apply Public Company Price Table Items
* [updatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch](#updatepubliccompanypricetableitemapiv2publiccompaniescompanyidpricetableitemsitemidpatch) - Update Public Company Price Table Item

## list

List Public Companies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_companies_api_v2_public_companies_get" method="get" path="/v2/public/companies" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { companiesList } from "sanka-sdk/funcs/companies-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesList(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicCompaniesApiV2PublicCompaniesGetRequest](../../models/operations/list-public-companies-api-v2-public-companies-get-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicCompaniesApiV2PublicCompaniesGetResponse](../../models/operations/list-public-companies-api-v2-public-companies-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## create

Create Public Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_company_api_v2_public_companies_post" method="post" path="/v2/public/companies" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.create({
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
import { companiesCreate } from "sanka-sdk/funcs/companies-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesCreate(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicCompanyApiV2PublicCompaniesPostRequest](../../models/operations/create-public-company-api-v2-public-companies-post-request.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicCompanyApiV2PublicCompaniesPostResponse](../../models/operations/create-public-company-api-v2-public-companies-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_company_api_v2_public_companies__company_id__get" method="get" path="/v2/public/companies/{company_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.get({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { companiesGet } from "sanka-sdk/funcs/companies-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesGet(sanka, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicCompanyApiV2PublicCompaniesCompanyIdGetRequest](../../models/operations/get-public-company-api-v2-public-companies-company-id-get-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicCompanyApiV2PublicCompaniesCompanyIdGetResponse](../../models/operations/get-public-company-api-v2-public-companies-company-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## update

Update Public Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_company_api_v2_public_companies__company_id__put" method="put" path="/v2/public/companies/{company_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.update({
    companyId: "<id>",
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
import { companiesUpdate } from "sanka-sdk/funcs/companies-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesUpdate(sanka, {
    companyId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPutRequest](../../models/operations/update-public-company-api-v2-public-companies-company-id-put-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPutResponse](../../models/operations/update-public-company-api-v2-public-companies-company-id-put-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## delete

Delete Public Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_company_api_v2_public_companies__company_id__delete" method="delete" path="/v2/public/companies/{company_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.delete({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { companiesDelete } from "sanka-sdk/funcs/companies-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesDelete(sanka, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePublicCompanyApiV2PublicCompaniesCompanyIdDeleteRequest](../../models/operations/delete-public-company-api-v2-public-companies-company-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePublicCompanyApiV2PublicCompaniesCompanyIdDeleteResponse](../../models/operations/delete-public-company-api-v2-public-companies-company-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet

Get Public Company Price Table

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_company_price_table_api_v2_public_companies__company_id__price_table_get" method="get" path="/v2/public/companies/{company_id}/price-table" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.getPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet({
    companyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { companiesGetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet } from "sanka-sdk/funcs/companies-get-public-company-price-table-api-v2-public-companies-company-id-price-table-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesGetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet(sanka, {
    companyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGetRequest](../../models/operations/get-public-company-price-table-api-v2-public-companies-company-id-price-table-get-request.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGetResponse](../../models/operations/get-public-company-price-table-api-v2-public-companies-company-id-price-table-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch

Update Public Company Price Table Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_company_price_table_company_api_v2_public_companies__company_id__price_table_company_patch" method="patch" path="/v2/public/companies/{company_id}/price-table/company" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.updatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch({
    companyId: "<id>",
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
  companiesUpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch,
} from "sanka-sdk/funcs/companies-update-public-company-price-table-company-api-v2-public-companies-company-id-price-table-company-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesUpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch(sanka, {
    companyId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesUpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                              | [operations.UpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatchRequest](../../models/operations/update-public-company-price-table-company-api-v2-public-companies-company-id-price-table-company-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |

### Response

**Promise\<[operations.UpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatchResponse](../../models/operations/update-public-company-price-table-company-api-v2-public-companies-company-id-price-table-company-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## applyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost

Apply Public Company Price Table Items

### Example Usage

<!-- UsageSnippet language="typescript" operationID="apply_public_company_price_table_items_api_v2_public_companies__company_id__price_table_items_apply_all_post" method="post" path="/v2/public/companies/{company_id}/price-table/items/apply-all" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.applyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost({
    companyId: "<id>",
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
  companiesApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost,
} from "sanka-sdk/funcs/companies-apply-public-company-price-table-items-api-v2-public-companies-company-id-price-table-items-apply-all-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost(sanka, {
    companyId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                    | [operations.ApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPostRequest](../../models/operations/apply-public-company-price-table-items-api-v2-public-companies-company-id-price-table-items-apply-all-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                               |
| `options.retries`                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                             |

### Response

**Promise\<[operations.ApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPostResponse](../../models/operations/apply-public-company-price-table-items-api-v2-public-companies-company-id-price-table-items-apply-all-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch

Update Public Company Price Table Item

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_company_price_table_item_api_v2_public_companies__company_id__price_table_items__item_id__patch" method="patch" path="/v2/public/companies/{company_id}/price-table/items/{item_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.companies.updatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch({
    companyId: "<id>",
    itemId: "<id>",
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
  companiesUpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch,
} from "sanka-sdk/funcs/companies-update-public-company-price-table-item-api-v2-public-companies-company-id-price-table-items-item-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await companiesUpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch(sanka, {
    companyId: "<id>",
    itemId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesUpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                  | [operations.UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchRequest](../../models/operations/update-public-company-price-table-item-api-v2-public-companies-company-id-price-table-items-item-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                             |
| `options.retries`                                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                           |

### Response

**Promise\<[operations.UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchResponse](../../models/operations/update-public-company-price-table-item-api-v2-public-companies-company-id-price-table-items-item-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |