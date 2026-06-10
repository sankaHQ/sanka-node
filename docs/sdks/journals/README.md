# Journals

## Overview

### Available Operations

* [listPublicJournalsApiV2PublicJournalsGet](#listpublicjournalsapiv2publicjournalsget) - List Public Journals
* [createPublicJournalStatementViewApiV2PublicJournalsViewsPost](#createpublicjournalstatementviewapiv2publicjournalsviewspost) - Create Public Journal Statement View

## listPublicJournalsApiV2PublicJournalsGet

List Public Journals

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_journals_api_v2_public_journals_get" method="get" path="/v2/public/journals" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.journals.listPublicJournalsApiV2PublicJournalsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { journalsListPublicJournalsApiV2PublicJournalsGet } from "sanka-sdk/funcs/journals-list-public-journals-api-v2-public-journals-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await journalsListPublicJournalsApiV2PublicJournalsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("journalsListPublicJournalsApiV2PublicJournalsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicJournalsApiV2PublicJournalsGetRequest](../../models/operations/list-public-journals-api-v2-public-journals-get-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicJournalsApiV2PublicJournalsGetResponse](../../models/operations/list-public-journals-api-v2-public-journals-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createPublicJournalStatementViewApiV2PublicJournalsViewsPost

Create Public Journal Statement View

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_journal_statement_view_api_v2_public_journals_views_post" method="post" path="/v2/public/journals/views" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.journals.createPublicJournalStatementViewApiV2PublicJournalsViewsPost({
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
import { journalsCreatePublicJournalStatementViewApiV2PublicJournalsViewsPost } from "sanka-sdk/funcs/journals-create-public-journal-statement-view-api-v2-public-journals-views-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await journalsCreatePublicJournalStatementViewApiV2PublicJournalsViewsPost(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("journalsCreatePublicJournalStatementViewApiV2PublicJournalsViewsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                   | [operations.CreatePublicJournalStatementViewApiV2PublicJournalsViewsPostRequest](../../models/operations/create-public-journal-statement-view-api-v2-public-journals-views-post-request.md) | :heavy_check_mark:                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                   | RequestOptions                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.              |
| `options.retries`                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                            |

### Response

**Promise\<[operations.CreatePublicJournalStatementViewApiV2PublicJournalsViewsPostResponse](../../models/operations/create-public-journal-statement-view-api-v2-public-journals-views-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |