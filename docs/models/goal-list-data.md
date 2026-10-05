# GoalListData

## Example Usage

```typescript
import { GoalListData } from "sanka-sdk/models";

let value: GoalListData = {
  items: [],
  total: 236909,
  canEdit: false,
  fiscalYearStartMonth: 44767,
  defaultCurrency: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `items`                                              | [models.GoalListItem](../models/goal-list-item.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `total`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `canEdit`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `fiscalYearStartMonth`                               | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `defaultCurrency`                                    | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |