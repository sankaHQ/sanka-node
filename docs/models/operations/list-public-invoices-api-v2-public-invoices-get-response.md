# ListPublicInvoicesApiV2PublicInvoicesGetResponse

## Example Usage

```typescript
import { ListPublicInvoicesApiV2PublicInvoicesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicInvoicesApiV2PublicInvoicesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicInvoicesApiV2PublicInvoicesGet200Envelope](../../models/list-public-invoices-api-v2-public-invoices-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |