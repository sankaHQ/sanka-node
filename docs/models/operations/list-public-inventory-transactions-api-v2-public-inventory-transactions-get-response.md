# ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGetResponse

## Example Usage

```typescript
import { ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGetResponse } from "sanka-sdk/models/operations";

let value:
  ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGetResponse = {
    headers: {
      "key": [],
      "key1": [],
      "key2": [],
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

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `result`                                                                                                                                                                                        | [models.ListPublicInventoryTransactionsApiV2PublicInventoryTransactionsGet200Envelope](../../models/list-public-inventory-transactions-api-v2-public-inventory-transactions-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |