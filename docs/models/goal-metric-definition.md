# GoalMetricDefinition

What a goal counts or sums: one object's active records, by the month of one of their
dates, narrowed by filters (the same expressions as saved views).

## Example Usage

```typescript
import { GoalMetricDefinition } from "sanka-sdk/models";

let value: GoalMetricDefinition = {
  source: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `source`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `measure`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `dateField`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `filters`                                                                | [models.SearchFilterExpression](../models/search-filter-expression.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |