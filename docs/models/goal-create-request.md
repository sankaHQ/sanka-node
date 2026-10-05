# GoalCreateRequest

## Example Usage

```typescript
import { GoalCreateRequest } from "sanka-sdk/models";

let value: GoalCreateRequest = {
  name: "<value>",
  metric: "invoice_revenue",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `name`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `metric`                                                                          | [models.GoalCreateRequestMetric](../models/goal-create-request-metric.md)         | :heavy_check_mark:                                                                | N/A                                                                               |
| `amount`                                                                          | [models.GoalCreateRequestAmount](../models/goal-create-request-amount.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `currency`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `definition`                                                                      | [models.GoalMetricDefinition](../models/goal-metric-definition.md)                | :heavy_minus_sign:                                                                | N/A                                                                               |
| `assignment`                                                                      | [models.GoalCreateRequestAssignment](../models/goal-create-request-assignment.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `assigneeIds`                                                                     | *number*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |