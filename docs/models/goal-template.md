# GoalTemplate

## Example Usage

```typescript
import { GoalTemplate } from "sanka-sdk/models";

let value: GoalTemplate = {
  key: "<key>",
  label: "<value>",
  metric: "custom",
  definition: {
    source: "<value>",
  },
  unit: "money",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                   | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `label`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `metric`                                                                                                                                                | [models.GoalTemplateMetric](../models/goal-template-metric.md)                                                                                          | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `definition`                                                                                                                                            | [models.GoalMetricDefinition](../models/goal-metric-definition.md)                                                                                      | :heavy_check_mark:                                                                                                                                      | What a goal counts or sums: one object's active records, by the month of one of their<br/>dates, narrowed by filters (the same expressions as saved views). |
| `unit`                                                                                                                                                  | [models.GoalTemplateUnit](../models/goal-template-unit.md)                                                                                              | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |