# GoalUpdateRequest

## Example Usage

```typescript
import { GoalUpdateRequest } from "sanka-sdk/models";

let value: GoalUpdateRequest = {
  expectedVersion: 67597,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `expectedVersion`                                                                 | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `amount`                                                                          | [models.GoalUpdateRequestAmount](../models/goal-update-request-amount.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `definition`                                                                      | [models.GoalMetricDefinition](../models/goal-metric-definition.md)                | :heavy_minus_sign:                                                                | N/A                                                                               |
| `assignment`                                                                      | [models.GoalUpdateRequestAssignment](../models/goal-update-request-assignment.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `assigneeIds`                                                                     | *number*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |