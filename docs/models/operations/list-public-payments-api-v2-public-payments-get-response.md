# ListPublicPaymentsApiV2PublicPaymentsGetResponse

## Example Usage

```typescript
import { ListPublicPaymentsApiV2PublicPaymentsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicPaymentsApiV2PublicPaymentsGetResponse = {
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
| `result`                                                                                                                                  | [models.ListPublicPaymentsApiV2PublicPaymentsGet200Envelope](../../models/list-public-payments-api-v2-public-payments-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |