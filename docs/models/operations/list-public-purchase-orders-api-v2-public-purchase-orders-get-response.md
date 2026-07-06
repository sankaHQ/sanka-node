# ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse

## Example Usage

```typescript
import { ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      objectType: "<value>",
      view: {
        viewType: "list",
      },
      columns: [
        "<value 1>",
        "<value 2>",
      ],
      page: 687543,
      pageSize: 277009,
      total: 195755,
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