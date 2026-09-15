# Workflows

## Overview

### Available Operations

* [list](#list) - List Public Workflows
* [createOrUpdate](#createorupdate) - Create Public Workflow
* [get](#get) - Get Public Workflow
* [updatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch](#updatepublicworkflowapiv2publicworkflowsworkflowidpatch) - Update Public Workflow
* [deletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete](#deletepublicworkflowapiv2publicworkflowsworkflowiddelete) - Delete Public Workflow
* [runByRef](#runbyref) - Run Public Workflow
* [planTemplate](#plantemplate) - Plan Public Workflow Template
* [useTemplate](#usetemplate) - Use Public Workflow Template
* [getFlow](#getflow) - Get Public Workflow Flow
* [constructFlow](#constructflow) - Construct Public Workflow Flow

## list

List Public Workflows

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_workflows_api_v2_public_workflows_get" method="get" path="/v2/public/workflows" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowsList } from "sanka-sdk/funcs/workflows-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsList(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicWorkflowsApiV2PublicWorkflowsGetRequest](../../models/operations/list-public-workflows-api-v2-public-workflows-get-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicWorkflowsApiV2PublicWorkflowsGetResponse](../../models/operations/list-public-workflows-api-v2-public-workflows-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## createOrUpdate

Create Public Workflow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_public_workflow_api_v2_public_workflows_post" method="post" path="/v2/public/workflows" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.createOrUpdate({
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
import { workflowsCreateOrUpdate } from "sanka-sdk/funcs/workflows-create-or-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsCreateOrUpdate(sanka, {
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsCreateOrUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicWorkflowApiV2PublicWorkflowsPostRequest](../../models/operations/create-public-workflow-api-v2-public-workflows-post-request.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePublicWorkflowApiV2PublicWorkflowsPostResponse](../../models/operations/create-public-workflow-api-v2-public-workflows-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## get

Get Public Workflow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_workflow_api_v2_public_workflows__workflow_id__get" method="get" path="/v2/public/workflows/{workflow_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.get({
    workflowId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowsGet } from "sanka-sdk/funcs/workflows-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsGet(sanka, {
    workflowId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGetRequest](../../models/operations/get-public-workflow-api-v2-public-workflows-workflow-id-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGetResponse](../../models/operations/get-public-workflow-api-v2-public-workflows-workflow-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## updatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch

Update Public Workflow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_public_workflow_api_v2_public_workflows__workflow_id__patch" method="patch" path="/v2/public/workflows/{workflow_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.updatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch({
    workflowId: "<id>",
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
import { workflowsUpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch } from "sanka-sdk/funcs/workflows-update-public-workflow-api-v2-public-workflows-workflow-id-patch.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsUpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch(sanka, {
    workflowId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsUpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchRequest](../../models/operations/update-public-workflow-api-v2-public-workflows-workflow-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchResponse](../../models/operations/update-public-workflow-api-v2-public-workflows-workflow-id-patch-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## deletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete

Delete Public Workflow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_public_workflow_api_v2_public_workflows__workflow_id__delete" method="delete" path="/v2/public/workflows/{workflow_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.deletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete({
    workflowId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowsDeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete } from "sanka-sdk/funcs/workflows-delete-public-workflow-api-v2-public-workflows-workflow-id-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsDeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete(sanka, {
    workflowId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsDeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDeleteRequest](../../models/operations/delete-public-workflow-api-v2-public-workflows-workflow-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[operations.DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDeleteResponse](../../models/operations/delete-public-workflow-api-v2-public-workflows-workflow-id-delete-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## runByRef

Run Public Workflow

### Example Usage

<!-- UsageSnippet language="typescript" operationID="run_public_workflow_api_v2_public_workflows__workflow_id__run_post" method="post" path="/v2/public/workflows/{workflow_id}/run" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.runByRef({
    workflowId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowsRunByRef } from "sanka-sdk/funcs/workflows-run-by-ref.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsRunByRef(sanka, {
    workflowId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsRunByRef failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostRequest](../../models/operations/run-public-workflow-api-v2-public-workflows-workflow-id-run-post-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[operations.RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostResponse](../../models/operations/run-public-workflow-api-v2-public-workflows-workflow-id-run-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## planTemplate

Review a template without writing a workflow definition.

The request UUID binds immutable input and one plan digest. Reusing that UUID
with changed input conflicts. Existing workflows require their current full
definition digest. Only advertised shared templates can be planned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="plan_public_workflow_template_api_v2_public_workflows_templates_plan_post" method="post" path="/v2/public/workflows/templates/plan" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.planTemplate({
    body: {
      requestId: "af38247d-51df-4490-a089-518c969d7267",
      templateId: "<id>",
      templateVersion: 730850,
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
import { workflowsPlanTemplate } from "sanka-sdk/funcs/workflows-plan-template.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsPlanTemplate(sanka, {
    body: {
      requestId: "af38247d-51df-4490-a089-518c969d7267",
      templateId: "<id>",
      templateVersion: 730850,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsPlanTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                         | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                         | [operations.PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostRequest](../../models/operations/plan-public-workflow-template-api-v2-public-workflows-templates-plan-post-request.md) | :heavy_check_mark:                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                    |
| `options.retries`                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                  |

### Response

**Promise\<[operations.PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostResponse](../../models/operations/plan-public-workflow-template-api-v2-public-workflows-templates-plan-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## useTemplate

Construct the exact approved plan as one inactive native workflow.

Retry the same UUID and digest after a lost response. The receipt retains the
original committed definition digest even if a later native edit changed it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="use_public_workflow_template_api_v2_public_workflows_templates_use_post" method="post" path="/v2/public/workflows/templates/use" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.useTemplate({
    body: {
      requestId: "4c96ca59-6285-4c20-b9f6-25e611872cdb",
      planDigest: "<value>",
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
import { workflowsUseTemplate } from "sanka-sdk/funcs/workflows-use-template.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsUseTemplate(sanka, {
    body: {
      requestId: "4c96ca59-6285-4c20-b9f6-25e611872cdb",
      planDigest: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsUseTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.UsePublicWorkflowTemplateApiV2PublicWorkflowsTemplatesUsePostRequest](../../models/operations/use-public-workflow-template-api-v2-public-workflows-templates-use-post-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[operations.UsePublicWorkflowTemplateApiV2PublicWorkflowsTemplatesUsePostResponse](../../models/operations/use-public-workflow-template-api-v2-public-workflows-templates-use-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## getFlow

Read managed settings and the current native definition digest.

Current values and the last template baseline are separate. Only implemented
operations are advertised; this response does not prove workflow execution.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_workflow_flow_api_v2_public_workflows__workflow_id__flow_get" method="get" path="/v2/public/workflows/{workflow_id}/flow" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.getFlow({
    workflowId: "30e34679-fad0-400b-8120-f98445464172",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { workflowsGetFlow } from "sanka-sdk/funcs/workflows-get-flow.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsGetFlow(sanka, {
    workflowId: "30e34679-fad0-400b-8120-f98445464172",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsGetFlow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGetRequest](../../models/operations/get-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-get-request.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[operations.GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGetResponse](../../models/operations/get-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## constructFlow

Apply an approved update while preserving native workflow and node IDs.

Stale definitions, conflicting independent edits and unsupported active
updates are rejected. Retry the original plan and attempt after uncertainty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="construct_public_workflow_flow_api_v2_public_workflows__workflow_id__flow_construct_post" method="post" path="/v2/public/workflows/{workflow_id}/flow/construct" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.workflows.constructFlow({
    workflowId: "87215ad2-8a02-4771-aec3-a642755e5230",
    body: {
      planDigest: "<value>",
      attemptId: "b892d7d9-c92a-4ad7-8a74-47a9ae98d63a",
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
import { workflowsConstructFlow } from "sanka-sdk/funcs/workflows-construct-flow.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await workflowsConstructFlow(sanka, {
    workflowId: "87215ad2-8a02-4771-aec3-a642755e5230",
    body: {
      planDigest: "<value>",
      attemptId: "b892d7d9-c92a-4ad7-8a74-47a9ae98d63a",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workflowsConstructFlow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                 | [operations.ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostRequest](../../models/operations/construct-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-construct-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                            |
| `options.retries`                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                          |

### Response

**Promise\<[operations.ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostResponse](../../models/operations/construct-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-construct-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |