# UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutResponse

## Example Usage

```typescript
import { UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutResponse } from "sanka-sdk/models/operations";

let value:
  UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutResponse =
    {
      headers: {
        "key": [
          "<value 1>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key2": [],
      },
      result: {
        success: true,
        data: {},
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `result`                                                                                                                                                                                               | [models.UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPut200Envelope](../../models/update-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |