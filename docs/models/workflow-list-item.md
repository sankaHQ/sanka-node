# WorkflowListItem

## Example Usage

```typescript
import { WorkflowListItem } from "sanka-sdk/models";

let value: WorkflowListItem = {
  id: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `workflowId`                                                     | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `title`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `titleJa`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `descriptionJa`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `statusDisplay`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `emoji`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `imageUrl`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isTriggerActive`                                                | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `triggerType`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `validToRun`                                                     | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `createdAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `updatedAt`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `lastRun`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `totalHistory`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `totalReview`                                                    | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `owner`                                                          | [models.WorkflowUserSummary](../models/workflow-user-summary.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `createdBy`                                                      | [models.WorkflowUserSummary](../models/workflow-user-summary.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `lastUpdatedBy`                                                  | [models.WorkflowUserSummary](../models/workflow-user-summary.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `triggerNode`                                                    | [models.WorkflowTriggerNode](../models/workflow-trigger-node.md) | :heavy_minus_sign:                                               | N/A                                                              |