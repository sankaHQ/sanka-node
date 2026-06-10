# GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGetResponse

## Example Usage

```typescript
import {
  GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGetResponse,
} from "sanka-sdk/models/operations";

let value:
  GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGetResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
        success: true,
        data: {
          id: "<id>",
          recordId: "<id>",
          objectType: "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                                                | [models.GetPublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdGet200Envelope](../../models/get-public-inventory-transaction-api-v2-public-inventory-transactions-transaction-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                     |