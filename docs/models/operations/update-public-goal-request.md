# UpdatePublicGoalRequest

## Example Usage

```typescript
import { UpdatePublicGoalRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicGoalRequest = {
  goalId: "cdfd8c8b-faa3-4fd3-ad8d-eec8b3487df0",
  body: {
    expectedVersion: 647745,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `goalId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `language`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `workspaceId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `xWorkspaceCode`                                                | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.GoalUpdateRequest](../../models/goal-update-request.md) | :heavy_check_mark:                                              | N/A                                                             |