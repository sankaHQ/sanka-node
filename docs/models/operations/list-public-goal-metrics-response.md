# ListPublicGoalMetricsResponse

## Example Usage

```typescript
import { ListPublicGoalMetricsResponse } from "sanka-sdk/models/operations";

let value: ListPublicGoalMetricsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ListPublicGoalMetrics200Envelope](../../models/list-public-goal-metrics200-envelope.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |