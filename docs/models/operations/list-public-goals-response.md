# ListPublicGoalsResponse

## Example Usage

```typescript
import { ListPublicGoalsResponse } from "sanka-sdk/models/operations";

let value: ListPublicGoalsResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ListPublicGoals200Envelope](../../models/list-public-goals200-envelope.md) | :heavy_check_mark:                                                                 | N/A                                                                                |