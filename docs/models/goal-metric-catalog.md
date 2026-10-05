# GoalMetricCatalog

## Example Usage

```typescript
import { GoalMetricCatalog } from "sanka-sdk/models";

let value: GoalMetricCatalog = {
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
  sources: [
    {
      key: "<key>",
      label: "<value>",
      measures: [],
      dateFields: [],
      defaultDateField: "<value>",
      hasOwner: false,
      filterObjectType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `templates`                                                  | [models.GoalTemplate](../models/goal-template.md)[]          | :heavy_check_mark:                                           | N/A                                                          |
| `sources`                                                    | [models.GoalSourceOption](../models/goal-source-option.md)[] | :heavy_check_mark:                                           | N/A                                                          |