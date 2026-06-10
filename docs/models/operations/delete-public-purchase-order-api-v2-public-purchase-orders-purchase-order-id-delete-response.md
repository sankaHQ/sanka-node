# DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDeleteResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
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

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                    | Record<string, *string*[]>                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `result`                                                                                                                                                                                                     | [models.DeletePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdDelete200Envelope](../../models/delete-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |