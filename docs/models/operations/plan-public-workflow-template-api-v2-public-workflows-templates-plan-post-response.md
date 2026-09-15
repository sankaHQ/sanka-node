# PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostResponse

## Example Usage

```typescript
import { PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostResponse } from "sanka-sdk/models/operations";

let value:
  PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key2": [
        "<value 1>",
        "<value 2>",
      ],
    },
    result: {
      success: true,
      data: {
        workspaceId: "56615485-fe9f-4e10-9323-ac505d346047",
        requestId: "b6a607a0-b9cf-4391-b610-7072b927bb20",
        planDigest: "<value>",
        templateId: "<id>",
        templateVersion: 483512,
        operation: "update",
        applicable: false,
        parameters: {},
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `result`                                                                                                                                                                                   | [models.PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPost200Envelope](../../models/plan-public-workflow-template-api-v2-public-workflows-templates-plan-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |