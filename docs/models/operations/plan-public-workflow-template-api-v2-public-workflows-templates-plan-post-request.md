# PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostRequest

## Example Usage

```typescript
import { PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostRequest } from "sanka-sdk/models/operations";

let value:
  PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPostRequest = {
    body: {
      requestId: "98a9a8b1-3771-4f9e-90c9-2cf37f8db724",
      templateId: "<id>",
      templateVersion: 196202,
    },
  };
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `workspaceId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `xWorkspaceCode`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.PublicFlowTemplatePlanRequest](../../models/public-flow-template-plan-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |