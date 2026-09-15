# ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostRequest

## Example Usage

```typescript
import {
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostRequest,
} from "sanka-sdk/models/operations";

let value:
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostRequest =
    {
      workflowId: "339f755f-eba6-4ecf-a119-148ab9e6f088",
      body: {
        planDigest: "<value>",
        attemptId: "9b1078b6-bc34-4dd5-9cb7-3dbc59050379",
      },
    };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.PublicFlowConstructRequest](../../models/public-flow-construct-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |