# UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchRequest

## Example Usage

```typescript
import { UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchRequest = {
  workflowId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `workflowId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workspaceId`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `xWorkspaceCode`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `body`                                                                                   | [models.PublicWorkflowMutationRequest](../../models/public-workflow-mutation-request.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |