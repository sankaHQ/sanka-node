# ApiRoutersV1InventoryTransactionsPublicApiUpdatePublicInventoryTransactionRequest

## Example Usage

```typescript
import {
  ApiRoutersV1InventoryTransactionsPublicApiUpdatePublicInventoryTransactionRequest,
} from "sanka-sdk/models/operations";

let value:
  ApiRoutersV1InventoryTransactionsPublicApiUpdatePublicInventoryTransactionRequest =
    {
      transactionId: "<id>",
      body: {
        transactionType: "<value>",
      },
    };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `transactionId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `body`                                                                                           | [models.PublicInventoryTransactionRequest](../../models/public-inventory-transaction-request.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |