# WorkflowRuns

## Overview

### Available Operations

* [getRun](#getrun) - Get Public Workflow Run
* [getPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet](#getpublicworkflowrunnestedcompatapiv2publicworkflowsrunsrunidget) - Get Public Workflow Run Nested Compat
* [resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost](#resolvepublicworkflowrecordapiv2publicworkflowrunsresolverecordpost) - Resolve Public Workflow Record
* [previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost](#previewpublicworkflowcompatapiv2publicworkflowrunspreviewpost) - Preview Public Workflow Compat
* [previewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost](#previewpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpreviewpost) - Preview Public Hubspot Invoice Draft
* [previewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost](#previewpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepreviewpost) - Preview Public Freee Invoice Export
* [previewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost](#previewpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpreviewpost) - Preview Public Moneyforward Invoice Export
* [previewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost](#previewpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpreviewpost) - Preview Public Hubspot Estimate Draft
* [previewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost](#previewpublichubspotorderhandoffapiv2publicordershandoffshubspotpreviewpost) - Preview Public Hubspot Order Handoff
* [previewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost](#previewpublichubspotcommissionincentiveapiv2publicincentivescommissionhubspotpreviewpost) - Preview Public Hubspot Commission Incentive
* [previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost](#previewpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcepreviewpost) - Preview Public Salesforce Quote Readiness
* [summarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost](#summarizepublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcesummarypost) - Summarize Public Salesforce Quote Readiness
* [startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost](#startpublicworkflowcompatapiv2publicworkflowrunsstartpost) - Start Public Workflow Compat
* [startPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost](#startpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpost) - Start Public Hubspot Invoice Draft
* [startPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost](#startpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepost) - Start Public Freee Invoice Export
* [startPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost](#startpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpost) - Start Public Moneyforward Invoice Export
* [startPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost](#startpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpost) - Start Public Hubspot Estimate Draft
* [startPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost](#startpublichubspotorderhandoffapiv2publicordershandoffshubspotpost) - Start Public Hubspot Order Handoff
* [startPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost](#startpublichubspotrevenuecontrolreportapiv2publicreportsrevenuecontrolhubspotpost) - Start Public Hubspot Revenue Control Report
* [writebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost](#writebackpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcewritebackpost) - Writeback Public Salesforce Quote Readiness

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

## getPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet

Get Public Workflow Run Nested Compat

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_workflow_run_nested_compat_api_v2_public_workflows_runs__run_id__get" method="get" path="/v2/public/workflows/runs/{run_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.getPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet({
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
import { workflowRunsGetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet } from "sanka-sdk/funcs/workflow-runs-get-public-workflow-run-nested-compat-api-v2-public-workflows-runs-run-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsGetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet(sanka, {
    runId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsGetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                              | [operations.GetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGetRequest](../../models/operations/get-public-workflow-run-nested-compat-api-v2-public-workflows-runs-run-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                             |
| `options`                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                         |
| `options.retries`                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                       |

### Response

**Promise\<[operations.GetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGetResponse](../../models/operations/get-public-workflow-run-nested-compat-api-v2-public-workflows-runs-run-id-get-response.md)\>**

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

## previewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost

Preview Public Hubspot Invoice Draft

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_hubspot_invoice_draft_api_v2_public_invoices_drafts_hubspot_preview_post" method="post" path="/v2/public/invoices/drafts/hubspot/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
  workflowRunsPreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                   | [operations.PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPostRequest](../../models/operations/preview-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                              |
| `options.retries`                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                            |

### Response

**Promise\<[operations.PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPostResponse](../../models/operations/preview-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost

Preview Public Freee Invoice Export

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_freee_invoice_export_api_v2_public_invoices_exports_freee_preview_post" method="post" path="/v2/public/invoices/exports/freee/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
  workflowRunsPreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-freee-invoice-export-api-v2-public-invoices-exports-freee-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                               | [operations.PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPostRequest](../../models/operations/preview-public-freee-invoice-export-api-v2-public-invoices-exports-freee-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |

### Response

**Promise\<[operations.PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPostResponse](../../models/operations/preview-public-freee-invoice-export-api-v2-public-invoices-exports-freee-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost

Preview Public Moneyforward Invoice Export

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_moneyforward_invoice_export_api_v2_public_invoices_exports_moneyforward_preview_post" method="post" path="/v2/public/invoices/exports/moneyforward/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
  workflowRunsPreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                           | [operations.PreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPostRequest](../../models/operations/preview-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                      |
| `options.retries`                                                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                    |

### Response

**Promise\<[operations.PreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPostResponse](../../models/operations/preview-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost

Preview Public Hubspot Estimate Draft

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_hubspot_estimate_draft_api_v2_public_estimates_drafts_hubspot_preview_post" method="post" path="/v2/public/estimates/drafts/hubspot/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost({
    body: {

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
  workflowRunsPreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost(sanka, {
    body: {

    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                       | [operations.PreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPostRequest](../../models/operations/preview-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                              | The request object to use for the request.                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |

### Response

**Promise\<[operations.PreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPostResponse](../../models/operations/preview-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost

Preview Public Hubspot Order Handoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_hubspot_order_handoff_api_v2_public_orders_handoffs_hubspot_preview_post" method="post" path="/v2/public/orders/handoffs/hubspot/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
  workflowRunsPreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                   | [operations.PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPostRequest](../../models/operations/preview-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                              |
| `options.retries`                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                            |

### Response

**Promise\<[operations.PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPostResponse](../../models/operations/preview-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## previewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost

Preview Public Hubspot Commission Incentive

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_public_hubspot_commission_incentive_api_v2_public_incentives_commission_hubspot_preview_post" method="post" path="/v2/public/incentives/commission/hubspot/preview" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.previewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
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
  workflowRunsPreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost,
} from "sanka-sdk/funcs/workflow-runs-preview-public-hubspot-commission-incentive-api-v2-public-incentives-commission-hubspot-preview-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsPreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsPreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                             | [operations.PreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPostRequest](../../models/operations/preview-public-hubspot-commission-incentive-api-v2-public-incentives-commission-hubspot-preview-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                        |
| `options.retries`                                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                      |

### Response

**Promise\<[operations.PreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPostResponse](../../models/operations/preview-public-hubspot-commission-incentive-api-v2-public-incentives-commission-hubspot-preview-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
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

## summarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost

Summarize Public Salesforce Quote Readiness

### Example Usage

<!-- UsageSnippet language="typescript" operationID="summarize_public_salesforce_quote_readiness_api_v2_public_cpq_quote_readiness_salesforce_summary_post" method="post" path="/v2/public/cpq/quote-readiness/salesforce/summary" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.summarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost({
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
  workflowRunsSummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost,
} from "sanka-sdk/funcs/workflow-runs-summarize-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-summary-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsSummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost(sanka, {
    body: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsSummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                              | [operations.SummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPostRequest](../../models/operations/summarize-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-summary-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |

### Response

**Promise\<[operations.SummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPostResponse](../../models/operations/summarize-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-summary-post-response.md)\>**

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

## startPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost

Start Public Hubspot Invoice Draft

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_hubspot_invoice_draft_api_v2_public_invoices_drafts_hubspot_post" method="post" path="/v2/public/invoices/drafts/hubspot" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
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
import { workflowRunsStartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost } from "sanka-sdk/funcs/workflow-runs-start-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.StartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPostRequest](../../models/operations/start-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-post-request.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.StartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPostResponse](../../models/operations/start-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost

Start Public Freee Invoice Export

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_freee_invoice_export_api_v2_public_invoices_exports_freee_post" method="post" path="/v2/public/invoices/exports/freee" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost({
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
import { workflowRunsStartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost } from "sanka-sdk/funcs/workflow-runs-start-public-freee-invoice-export-api-v2-public-invoices-exports-freee-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost(sanka, {
    body: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.StartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePostRequest](../../models/operations/start-public-freee-invoice-export-api-v2-public-invoices-exports-freee-post-request.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[operations.StartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePostResponse](../../models/operations/start-public-freee-invoice-export-api-v2-public-invoices-exports-freee-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost

Start Public Moneyforward Invoice Export

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_moneyforward_invoice_export_api_v2_public_invoices_exports_moneyforward_post" method="post" path="/v2/public/invoices/exports/moneyforward" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
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
  workflowRunsStartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost,
} from "sanka-sdk/funcs/workflow-runs-start-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                        | [operations.StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPostRequest](../../models/operations/start-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                   |
| `options.retries`                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                 |

### Response

**Promise\<[operations.StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPostResponse](../../models/operations/start-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost

Start Public Hubspot Estimate Draft

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_hubspot_estimate_draft_api_v2_public_estimates_drafts_hubspot_post" method="post" path="/v2/public/estimates/drafts/hubspot" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost({
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
import { workflowRunsStartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost } from "sanka-sdk/funcs/workflow-runs-start-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost(sanka, {
    body: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.StartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPostRequest](../../models/operations/start-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-post-request.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[operations.StartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPostResponse](../../models/operations/start-public-hubspot-estimate-draft-api-v2-public-estimates-drafts-hubspot-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost

Start Public Hubspot Order Handoff

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_hubspot_order_handoff_api_v2_public_orders_handoffs_hubspot_post" method="post" path="/v2/public/orders/handoffs/hubspot" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
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
import { workflowRunsStartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost } from "sanka-sdk/funcs/workflow-runs-start-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.StartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPostRequest](../../models/operations/start-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-post-request.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.StartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPostResponse](../../models/operations/start-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## startPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost

Start Public Hubspot Revenue Control Report

### Example Usage

<!-- UsageSnippet language="typescript" operationID="start_public_hubspot_revenue_control_report_api_v2_public_reports_revenue_control_hubspot_post" method="post" path="/v2/public/reports/revenue-control/hubspot" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.startPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
  workflowRunsStartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost,
} from "sanka-sdk/funcs/workflow-runs-start-public-hubspot-revenue-control-report-api-v2-public-reports-revenue-control-hubspot-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsStartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsStartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                | [operations.StartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPostRequest](../../models/operations/start-public-hubspot-revenue-control-report-api-v2-public-reports-revenue-control-hubspot-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                           |
| `options.retries`                                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                         |

### Response

**Promise\<[operations.StartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPostResponse](../../models/operations/start-public-hubspot-revenue-control-report-api-v2-public-reports-revenue-control-hubspot-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## writebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost

Writeback Public Salesforce Quote Readiness

### Example Usage

<!-- UsageSnippet language="typescript" operationID="writeback_public_salesforce_quote_readiness_api_v2_public_cpq_quote_readiness_salesforce_writeback_post" method="post" path="/v2/public/cpq/quote-readiness/salesforce/writeback" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflowRuns.writebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost({
    body: {
      "key": "<value>",
      "key1": "<value>",
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
  workflowRunsWritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost,
} from "sanka-sdk/funcs/workflow-runs-writeback-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-writeback-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowRunsWritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost(sanka, {
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowRunsWritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                                  | [operations.WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPostRequest](../../models/operations/writeback-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-writeback-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                             |
| `options.retries`                                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                           |

### Response

**Promise\<[operations.WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPostResponse](../../models/operations/writeback-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-writeback-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |
