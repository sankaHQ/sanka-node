# ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGet200Envelope

## Example Usage

```typescript
import { ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGet200Envelope } from "sanka-sdk/models";

let value: ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGet200Envelope = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *true*                                                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.Response200ListPublicPurchaseOrdersApiV2PublicPurchaseOrdersGet* | :heavy_check_mark:                                                       | N/A                                                                      |
| `meta`                                                                   | [models.EnvelopeMeta](../models/envelope-meta.md)                        | :heavy_check_mark:                                                       | N/A                                                                      |