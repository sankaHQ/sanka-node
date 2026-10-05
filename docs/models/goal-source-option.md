# GoalSourceOption

## Example Usage

```typescript
import { GoalSourceOption } from "sanka-sdk/models";

let value: GoalSourceOption = {
  key: "<key>",
  label: "<value>",
  measures: [
    {
      key: "<key>",
      label: "<value>",
      unit: "count",
    },
  ],
  dateFields: [],
  defaultDateField: "<value>",
  hasOwner: false,
  filterObjectType: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `key`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `label`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `measures`                                                     | [models.GoalMeasureOption](../models/goal-measure-option.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `dateFields`                                                   | [models.GoalOption](../models/goal-option.md)[]                | :heavy_check_mark:                                             | N/A                                                            |
| `defaultDateField`                                             | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `hasOwner`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `filterObjectType`                                             | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |