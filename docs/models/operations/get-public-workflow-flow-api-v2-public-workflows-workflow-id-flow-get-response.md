# GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGetResponse

## Example Usage

```typescript
import { GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGetResponse =
  {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
      ],
      "key1": [],
      "key2": [],
    },
    result: {
      success: true,
      data: {
        workspaceId: "e872ba57-74e0-4622-9d36-d93ab716f1a6",
        workflowId: "bc3c9673-8760-4886-a916-b0516ac9d043",
        status: "managed",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `result`                                                                                                                                                                          | [models.GetPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowGet200Envelope](../../models/get-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |