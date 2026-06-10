# DeletePublicExpenseApiV2PublicExpensesExpenseIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicExpenseApiV2PublicExpensesExpenseIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicExpenseApiV2PublicExpensesExpenseIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.DeletePublicExpenseApiV2PublicExpensesExpenseIdDelete200Envelope](../../models/delete-public-expense-api-v2-public-expenses-expense-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |