# UpdatePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdPutRequest

## Example Usage

```typescript
import {
  UpdatePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdPutRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicInventoryTransactionApiV2PublicInventoryTransactionsTransactionIdPutRequest =
    {
      transactionId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `transactionId`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.PublicObjectRecordMutationRequest](../../models/public-object-record-mutation-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |