# WorkflowRuns

## Overview

### Available Operations

* [getRun](#getrun) - Get Public Workflow Run
* [resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost](#resolvepublicworkflowrecordapiv2publicworkflowrunsresolverecordpost) - Resolve Public Workflow Record
* [previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost](#previewpublicworkflowcompatapiv2publicworkflowrunspreviewpost) - Preview Public Workflow Compat
* [previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost](#previewpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcepreviewpost) - Preview Public Salesforce Quote Readiness
* [startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost](#startpublicworkflowcompatapiv2publicworkflowrunsstartpost) - Start Public Workflow Compat

## getRun

Get Public Workflow Run

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_workflow_run_api_v2_public_workflow_runs__run_id__get" method="get" path="/v2/public/workflow-runs/{run_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.getRun({
    runId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowRunsGetRun } from "sanka-sdk/funcs/workflow-runs-get-run.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsGetRun(sanka, {
    runId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsGetRun failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGetRequest](../../models/operations/get-public-workflow-run-api-v2-public-workflow-runs-run-id-get-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGetResponse](../../models/operations/get-public-workflow-run-api-v2-public-workflow-runs-run-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost

Resolve Public Workflow Record

### Example Usage

<!-- UsageSnippet language="typescript" operationID="resolve_public_workflow_record_api_v2_public_workflow_runs_resolve_record_post" method="post" path="/v2/public/workflow-runs/resolve-record" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost({
    body: {
      query: "<value>",
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
import { workflowRunsResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost } from "sanka-sdk/funcs/workflow-runs-resolve-public-workflow-record-api-v2-public-workflow-runs-resolve-record-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost(sanka, {
    body: {
      query: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPostRequest](../../models/operations/resolve-public-workflow-record-api-v2-public-workflow-runs-resolve-record-post-request.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPostResponse](../../models/operations/resolve-public-workflow-record-api-v2-public-workflow-runs-resolve-record-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost

Preview Public Workflow Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_workflow_compat_api_v2_public_workflow_runs_preview_post" method="post" path="/v2/public/workflow-runs/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost({
    body: {
      workflowType: "<value>",
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
import { workflowRunsPreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost } from "sanka-sdk/funcs/workflow-runs-preview-public-workflow-compat-api-v2-public-workflow-runs-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost(sanka, {
    body: {
      workflowType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPostRequest](../../models/operations/preview-public-workflow-compat-api-v2-public-workflow-runs-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[operations.PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPostResponse](../../models/operations/preview-public-workflow-compat-api-v2-public-workflow-runs-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost

Preview Public Salesforce Quote Readiness

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_salesforce_quote_readiness_api_v2_public_cpq_quote_readiness_salesforce_preview_post" method="post" path="/v2/public/cpq/quote-readiness/salesforce/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost({
    body: {
      "key": "<value>",
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
  workflowRunsPreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost(sanka, {
    body: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                          | [operations.PreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPostRequest](../../models/operations/preview-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                     |
| `options.retries`                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                   |

### Response

**Promise\<[operations.PreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPostResponse](../../models/operations/preview-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost

Start Public Workflow Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_workflow_compat_api_v2_public_workflow_runs_start_post" method="post" path="/v2/public/workflow-runs/start" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost({
    body: {
      workflowType: "<value>",
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
import { workflowRunsStartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost } from "sanka-sdk/funcs/workflow-runs-start-public-workflow-compat-api-v2-public-workflow-runs-start-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost(sanka, {
    body: {
      workflowType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPostRequest](../../models/operations/start-public-workflow-compat-api-v2-public-workflow-runs-start-post-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[operations.StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPostResponse](../../models/operations/start-public-workflow-compat-api-v2-public-workflow-runs-start-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |