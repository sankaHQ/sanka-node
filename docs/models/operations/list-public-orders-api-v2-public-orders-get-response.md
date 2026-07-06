# ListPublicOrdersApiV2PublicOrdersGetResponse

## Example Usage

```typescript
import { ListPublicOrdersApiV2PublicOrdersGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicOrdersApiV2PublicOrdersGetResponse = {
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
      ],
      page: 594489,
      pageSize: 183233,
      total: 143809,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `result`                                                                                                                          | [models.ListPublicOrdersApiV2PublicOrdersGet200Envelope](../../models/list-public-orders-api-v2-public-orders-get200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |