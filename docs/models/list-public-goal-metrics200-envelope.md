# ListPublicGoalMetrics200Envelope

## Example Usage

```typescript
import { ListPublicGoalMetrics200Envelope } from "sanka-sdk/models";

let value: ListPublicGoalMetrics200Envelope = {
  success: true,
  data: {
    templates: [
      {
        key: "<key>",
        label: "<value>",
        metric: "custom",
        definition: {
          source: "<value>",
        },
        unit: "number",
      },
    ],
    sources: [],
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *true*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [models.GoalMetricCatalog](../models/goal-metric-catalog.md) | :heavy_check_mark:                                           | N/A                                                          |
| `meta`                                                       | [models.EnvelopeMeta](../models/envelope-meta.md)            | :heavy_check_mark:                                           | N/A                                                          |