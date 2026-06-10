# ListPublicBillsApiV2PublicBillsGetResponse

## Example Usage

```typescript
import { ListPublicBillsApiV2PublicBillsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicBillsApiV2PublicBillsGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [models.ListPublicBillsApiV2PublicBillsGet200Envelope](../../models/list-public-bills-api-v2-public-bills-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |