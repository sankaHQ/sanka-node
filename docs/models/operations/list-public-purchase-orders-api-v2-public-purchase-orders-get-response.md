# ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse

## Example Usage

```typescript
import { ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
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

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `result`                                                                                                                                                            | [models.ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGet200Envelope](../../models/list-public-purchase-orders-api-v2-public-purchase-orders-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |