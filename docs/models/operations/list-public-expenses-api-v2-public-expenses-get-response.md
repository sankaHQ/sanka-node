# ListPublicExpensesApiV2PublicExpensesGetResponse

## Example Usage

```typescript
import { ListPublicExpensesApiV2PublicExpensesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicExpensesApiV2PublicExpensesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      objectType: "<value>",
      view: {},
      columns: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      page: 649857,
      pageSize: 653504,
      total: 801424,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicExpensesApiV2PublicExpensesGet200Envelope](../../models/list-public-expenses-api-v2-public-expenses-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |