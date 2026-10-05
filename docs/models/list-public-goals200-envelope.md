# ListPublicGoals200Envelope

## Example Usage

```typescript
import { ListPublicGoals200Envelope } from "sanka-sdk/models";

let value: ListPublicGoals200Envelope = {
  success: true,
  data: {
    items: [],
    total: 172078,
    canEdit: false,
    fiscalYearStartMonth: 266524,
    defaultCurrency: "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *true*                                             | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [models.GoalListData](../models/goal-list-data.md) | :heavy_check_mark:                                 | N/A                                                |
| `meta`                                             | [models.EnvelopeMeta](../models/envelope-meta.md)  | :heavy_check_mark:                                 | N/A                                                |