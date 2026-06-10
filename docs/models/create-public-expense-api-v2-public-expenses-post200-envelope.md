# CreatePublicExpenseApiV2PublicExpensesPost200Envelope

## Example Usage

```typescript
import { CreatePublicExpenseApiV2PublicExpensesPost200Envelope } from "sanka-sdk/models";

let value: CreatePublicExpenseApiV2PublicExpensesPost200Envelope = {
  success: true,
  data: {
    "key": "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *true*                                            | :heavy_check_mark:                                | N/A                                               |
| `data`                                            | Record<string, *any*>                             | :heavy_check_mark:                                | N/A                                               |
| `meta`                                            | [models.EnvelopeMeta](../models/envelope-meta.md) | :heavy_check_mark:                                | N/A                                               |