# RuleSettings

## Overview

### Available Operations

* [listPublicApprovalRulesApiV2PublicApprovalRulesGet](#listpublicapprovalrulesapiv2publicapprovalrulesget) - List Public Approval Rules
* [upsertPublicApprovalRuleApiV2PublicApprovalRulesPost](#upsertpublicapprovalruleapiv2publicapprovalrulespost) - Upsert Public Approval Rule
* [getPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet](#getpublicapprovalruleoptionsapiv2publicapprovalrulesoptionsget) - Get Public Approval Rule Options
* [deletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete](#deletepublicapprovalruleapiv2publicapprovalrulesruleiddelete) - Delete Public Approval Rule
* [listPublicLockRulesApiV2PublicLockRulesGet](#listpubliclockrulesapiv2publiclockrulesget) - List Public Lock Rules
* [upsertPublicLockRuleApiV2PublicLockRulesPost](#upsertpubliclockruleapiv2publiclockrulespost) - Upsert Public Lock Rule
* [getPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet](#getpubliclockruleoptionsapiv2publiclockrulesoptionsget) - Get Public Lock Rule Options
* [deletePublicLockRuleApiV2PublicLockRulesRuleIdDelete](#deletepubliclockruleapiv2publiclockrulesruleiddelete) - Delete Public Lock Rule
* [listPublicDeliveryRulesApiV2PublicDeliveryRulesGet](#listpublicdeliveryrulesapiv2publicdeliveryrulesget) - List Public Delivery Rules
* [upsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost](#upsertpublicdeliveryruleapiv2publicdeliveryrulespost) - Upsert Public Delivery Rule
* [getPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet](#getpublicdeliveryruleoptionsapiv2publicdeliveryrulesoptionsget) - Get Public Delivery Rule Options
* [deletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete](#deletepublicdeliveryruleapiv2publicdeliveryrulesruleiddelete) - Delete Public Delivery Rule

## listPublicApprovalRulesApiV2PublicApprovalRulesGet

List Public Approval Rules

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_approval_rules_api_v2_public_approval_rules_get" method="get" path="/v2/public/approval-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.listPublicApprovalRulesApiV2PublicApprovalRulesGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsListPublicApprovalRulesApiV2PublicApprovalRulesGet } from "sanka-sdk/funcs/rule-settings-list-public-approval-rules-api-v2-public-approval-rules-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsListPublicApprovalRulesApiV2PublicApprovalRulesGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsListPublicApprovalRulesApiV2PublicApprovalRulesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicApprovalRulesApiV2PublicApprovalRulesGetRequest](../../models/operations/list-public-approval-rules-api-v2-public-approval-rules-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicApprovalRulesApiV2PublicApprovalRulesGetResponse](../../models/operations/list-public-approval-rules-api-v2-public-approval-rules-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## upsertPublicApprovalRuleApiV2PublicApprovalRulesPost

Upsert Public Approval Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_public_approval_rule_api_v2_public_approval_rules_post" method="post" path="/v2/public/approval-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.upsertPublicApprovalRuleApiV2PublicApprovalRulesPost({
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
import { ruleSettingsUpsertPublicApprovalRuleApiV2PublicApprovalRulesPost } from "sanka-sdk/funcs/rule-settings-upsert-public-approval-rule-api-v2-public-approval-rules-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsUpsertPublicApprovalRuleApiV2PublicApprovalRulesPost(sanka, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsUpsertPublicApprovalRuleApiV2PublicApprovalRulesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertPublicApprovalRuleApiV2PublicApprovalRulesPostRequest](../../models/operations/upsert-public-approval-rule-api-v2-public-approval-rules-post-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpsertPublicApprovalRuleApiV2PublicApprovalRulesPostResponse](../../models/operations/upsert-public-approval-rule-api-v2-public-approval-rules-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet

Get Public Approval Rule Options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_approval_rule_options_api_v2_public_approval_rules_options_get" method="get" path="/v2/public/approval-rules/options" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.getPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsGetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet } from "sanka-sdk/funcs/rule-settings-get-public-approval-rule-options-api-v2-public-approval-rules-options-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsGetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsGetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGetRequest](../../models/operations/get-public-approval-rule-options-api-v2-public-approval-rules-options-get-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[operations.GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGetResponse](../../models/operations/get-public-approval-rule-options-api-v2-public-approval-rules-options-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete

Delete Public Approval Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_approval_rule_api_v2_public_approval_rules__rule_id__delete" method="delete" path="/v2/public/approval-rules/{rule_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.deletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete({
    ruleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsDeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete } from "sanka-sdk/funcs/rule-settings-delete-public-approval-rule-api-v2-public-approval-rules-rule-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsDeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete(sanka, {
    ruleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsDeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.DeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDeleteRequest](../../models/operations/delete-public-approval-rule-api-v2-public-approval-rules-rule-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.DeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDeleteResponse](../../models/operations/delete-public-approval-rule-api-v2-public-approval-rules-rule-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicLockRulesApiV2PublicLockRulesGet

List Public Lock Rules

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_lock_rules_api_v2_public_lock_rules_get" method="get" path="/v2/public/lock-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.listPublicLockRulesApiV2PublicLockRulesGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsListPublicLockRulesApiV2PublicLockRulesGet } from "sanka-sdk/funcs/rule-settings-list-public-lock-rules-api-v2-public-lock-rules-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsListPublicLockRulesApiV2PublicLockRulesGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsListPublicLockRulesApiV2PublicLockRulesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicLockRulesApiV2PublicLockRulesGetRequest](../../models/operations/list-public-lock-rules-api-v2-public-lock-rules-get-request.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicLockRulesApiV2PublicLockRulesGetResponse](../../models/operations/list-public-lock-rules-api-v2-public-lock-rules-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## upsertPublicLockRuleApiV2PublicLockRulesPost

Upsert Public Lock Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_public_lock_rule_api_v2_public_lock_rules_post" method="post" path="/v2/public/lock-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.upsertPublicLockRuleApiV2PublicLockRulesPost({
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
import { ruleSettingsUpsertPublicLockRuleApiV2PublicLockRulesPost } from "sanka-sdk/funcs/rule-settings-upsert-public-lock-rule-api-v2-public-lock-rules-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsUpsertPublicLockRuleApiV2PublicLockRulesPost(sanka, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsUpsertPublicLockRuleApiV2PublicLockRulesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertPublicLockRuleApiV2PublicLockRulesPostRequest](../../models/operations/upsert-public-lock-rule-api-v2-public-lock-rules-post-request.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpsertPublicLockRuleApiV2PublicLockRulesPostResponse](../../models/operations/upsert-public-lock-rule-api-v2-public-lock-rules-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet

Get Public Lock Rule Options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_lock_rule_options_api_v2_public_lock_rules_options_get" method="get" path="/v2/public/lock-rules/options" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.getPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsGetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet } from "sanka-sdk/funcs/rule-settings-get-public-lock-rule-options-api-v2-public-lock-rules-options-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsGetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsGetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGetRequest](../../models/operations/get-public-lock-rule-options-api-v2-public-lock-rules-options-get-request.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGetResponse](../../models/operations/get-public-lock-rule-options-api-v2-public-lock-rules-options-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicLockRuleApiV2PublicLockRulesRuleIdDelete

Delete Public Lock Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_lock_rule_api_v2_public_lock_rules__rule_id__delete" method="delete" path="/v2/public/lock-rules/{rule_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.deletePublicLockRuleApiV2PublicLockRulesRuleIdDelete({
    ruleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsDeletePublicLockRuleApiV2PublicLockRulesRuleIdDelete } from "sanka-sdk/funcs/rule-settings-delete-public-lock-rule-api-v2-public-lock-rules-rule-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsDeletePublicLockRuleApiV2PublicLockRulesRuleIdDelete(sanka, {
    ruleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsDeletePublicLockRuleApiV2PublicLockRulesRuleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePublicLockRuleApiV2PublicLockRulesRuleIdDeleteRequest](../../models/operations/delete-public-lock-rule-api-v2-public-lock-rules-rule-id-delete-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePublicLockRuleApiV2PublicLockRulesRuleIdDeleteResponse](../../models/operations/delete-public-lock-rule-api-v2-public-lock-rules-rule-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listPublicDeliveryRulesApiV2PublicDeliveryRulesGet

List Public Delivery Rules

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_delivery_rules_api_v2_public_delivery_rules_get" method="get" path="/v2/public/delivery-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.listPublicDeliveryRulesApiV2PublicDeliveryRulesGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsListPublicDeliveryRulesApiV2PublicDeliveryRulesGet } from "sanka-sdk/funcs/rule-settings-list-public-delivery-rules-api-v2-public-delivery-rules-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsListPublicDeliveryRulesApiV2PublicDeliveryRulesGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsListPublicDeliveryRulesApiV2PublicDeliveryRulesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicDeliveryRulesApiV2PublicDeliveryRulesGetRequest](../../models/operations/list-public-delivery-rules-api-v2-public-delivery-rules-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicDeliveryRulesApiV2PublicDeliveryRulesGetResponse](../../models/operations/list-public-delivery-rules-api-v2-public-delivery-rules-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## upsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost

Upsert Public Delivery Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_public_delivery_rule_api_v2_public_delivery_rules_post" method="post" path="/v2/public/delivery-rules" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.upsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost({
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
import { ruleSettingsUpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost } from "sanka-sdk/funcs/rule-settings-upsert-public-delivery-rule-api-v2-public-delivery-rules-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsUpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost(sanka, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsUpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPostRequest](../../models/operations/upsert-public-delivery-rule-api-v2-public-delivery-rules-post-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPostResponse](../../models/operations/upsert-public-delivery-rule-api-v2-public-delivery-rules-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet

Get Public Delivery Rule Options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_delivery_rule_options_api_v2_public_delivery_rules_options_get" method="get" path="/v2/public/delivery-rules/options" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.getPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsGetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet } from "sanka-sdk/funcs/rule-settings-get-public-delivery-rule-options-api-v2-public-delivery-rules-options-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsGetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsGetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGetRequest](../../models/operations/get-public-delivery-rule-options-api-v2-public-delivery-rules-options-get-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[operations.GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGetResponse](../../models/operations/get-public-delivery-rule-options-api-v2-public-delivery-rules-options-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete

Delete Public Delivery Rule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_delivery_rule_api_v2_public_delivery_rules__rule_id__delete" method="delete" path="/v2/public/delivery-rules/{rule_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ruleSettings.deletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete({
    ruleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ruleSettingsDeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete } from "sanka-sdk/funcs/rule-settings-delete-public-delivery-rule-api-v2-public-delivery-rules-rule-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await ruleSettingsDeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete(sanka, {
    ruleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ruleSettingsDeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDeleteRequest](../../models/operations/delete-public-delivery-rule-api-v2-public-delivery-rules-rule-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDeleteResponse](../../models/operations/delete-public-delivery-rule-api-v2-public-delivery-rules-rule-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |