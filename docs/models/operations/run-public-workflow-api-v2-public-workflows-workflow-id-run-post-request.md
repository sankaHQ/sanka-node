# RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostRequest

## Example Usage

```typescript
import { RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostRequest } from "sanka-sdk/models/operations";

let value: RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostRequest = {
  workflowId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `workflowId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `workspaceId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `xWorkspaceCode`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `body`                                                                         | [models.PublicWorkflowRunRequest](../../models/public-workflow-run-request.md) | :heavy_minus_sign:                                                             | N/A                                                                            |