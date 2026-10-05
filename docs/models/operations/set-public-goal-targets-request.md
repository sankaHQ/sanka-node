# SetPublicGoalTargetsRequest

## Example Usage

```typescript
import { SetPublicGoalTargetsRequest } from "sanka-sdk/models/operations";

let value: SetPublicGoalTargetsRequest = {
  goalId: "f7f8b967-16c9-4c49-aa31-a8425f545478",
  body: {
    expectedVersion: 424346,
    cells: [
      {
        month: new Date("2025-03-17"),
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `goalId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `fiscalYear`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `language`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `workspaceId`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `xWorkspaceCode`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `body`                                                                     | [models.GoalTargetsSaveRequest](../../models/goal-targets-save-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |