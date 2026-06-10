# CreatePublicExpenseApiV2PublicExpensesPostResponse

## Example Usage

```typescript
import { CreatePublicExpenseApiV2PublicExpensesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicExpenseApiV2PublicExpensesPostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.CreatePublicExpenseApiV2PublicExpensesPost200Envelope](../../models/create-public-expense-api-v2-public-expenses-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |