# PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPost200Envelope

## Example Usage

```typescript
import { PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPost200Envelope } from "sanka-sdk/models";

let value:
  PlanPublicWorkflowTemplateApiV2PublicWorkflowsTemplatesPlanPost200Envelope = {
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
  };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `success`                                                       | *true*                                                          | :heavy_check_mark:                                              | N/A                                                             |
| `data`                                                          | [models.PublicFlowPlanData](../models/public-flow-plan-data.md) | :heavy_check_mark:                                              | N/A                                                             |
| `meta`                                                          | [models.EnvelopeMeta](../models/envelope-meta.md)               | :heavy_check_mark:                                              | N/A                                                             |