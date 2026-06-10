# CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPostResponse

## Example Usage

```typescript
import { CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPostResponse = {
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `result`                                                                                                                                                                | [models.CreatePublicPurchaseOrderApiV2PublicPurchaseOrdersPost200Envelope](../../models/create-public-purchase-order-api-v2-public-purchase-orders-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |