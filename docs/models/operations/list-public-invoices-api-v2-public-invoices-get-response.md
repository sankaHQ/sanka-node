# ListPublicInvoicesApiV2PublicInvoicesGetResponse

## Example Usage

```typescript
import { ListPublicInvoicesApiV2PublicInvoicesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicInvoicesApiV2PublicInvoicesGetResponse = {
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
      page: 49344,
      pageSize: 835042,
      total: 3045,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicInvoicesApiV2PublicInvoicesGet200Envelope](../../models/list-public-invoices-api-v2-public-invoices-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |