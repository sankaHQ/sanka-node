# GetPublicGoalProgressRequest

## Example Usage

```typescript
import { GetPublicGoalProgressRequest } from "sanka-sdk/models/operations";

let value: GetPublicGoalProgressRequest = {
  goalId: "018e7e79-5edf-436a-914b-9c1961064021",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `goalId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `subject`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `range`                                                             | [operations.Range](../../models/operations/range.md)                | :heavy_minus_sign:                                                  | N/A                                                                 |
| `fiscalYear`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `peoplePeriod`                                                      | [operations.PeoplePeriod](../../models/operations/people-period.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `language`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `workspaceId`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xWorkspaceCode`                                                    | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |