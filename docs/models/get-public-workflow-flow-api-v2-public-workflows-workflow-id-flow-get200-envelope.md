# GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGet200Envelope

## Example Usage

```typescript
import { GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGet200Envelope } from "sanka-sdk/models";

let value:
  GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGet200Envelope = {
    success: true,
    data: {
      workspaceId: "e872ba57-74e0-4622-9d36-d93ab716f1a6",
      workflowId: "bc3c9673-8760-4886-a916-b0516ac9d043",
      status: "managed",
    },
    meta: {
      ctxId: "<id>",
    },
  };
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *true*                                                            | :heavy_check_mark:                                                | N/A                                                               |
| `data`                                                            | [models.PublicFlowStateData](../models/public-flow-state-data.md) | :heavy_check_mark:                                                | N/A                                                               |
| `meta`                                                            | [models.EnvelopeMeta](../models/envelope-meta.md)                 | :heavy_check_mark:                                                | N/A                                                               |