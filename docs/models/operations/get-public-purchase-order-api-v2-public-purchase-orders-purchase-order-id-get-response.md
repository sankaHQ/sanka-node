# GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGetResponse

## Example Usage

```typescript
import { GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGetResponse = {
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

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `result`                                                                                                                                                                                         | [models.GetPublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdGet200Envelope](../../models/get-public-purchase-order-api-v2-public-purchase-orders-purchase-order-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |