# CreatePublicGoalRequest

## Example Usage

```typescript
import { CreatePublicGoalRequest } from "sanka-sdk/models/operations";

let value: CreatePublicGoalRequest = {
  body: {
    name: "<value>",
    metric: "invoice_revenue",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `language`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `workspaceId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `xWorkspaceCode`                                                | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.GoalCreateRequest](../../models/goal-create-request.md) | :heavy_check_mark:                                              | N/A                                                             |