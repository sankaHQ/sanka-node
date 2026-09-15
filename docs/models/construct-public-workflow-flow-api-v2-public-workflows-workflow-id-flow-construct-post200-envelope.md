# ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPost200Envelope

## Example Usage

```typescript
import {
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPost200Envelope,
} from "sanka-sdk/models";

let value:
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPost200Envelope =
    {
      success: true,
      data: {
        workspaceId: "91a4e88b-e478-4872-a92c-2be9903b6f1e",
        workflowId: "e27d7735-4a6f-43aa-bfc2-8468c78a5e16",
        requestId: "a0019845-9f68-45a9-b424-beba5567bbd9",
        planDigest: "<value>",
        definitionDigest: "<value>",
        status: "constructed",
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *true*                                                                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.PublicFlowConstructData](../models/public-flow-construct-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `meta`                                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)                         | :heavy_check_mark:                                                        | N/A                                                                       |