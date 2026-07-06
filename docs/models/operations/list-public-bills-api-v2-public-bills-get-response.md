# ListPublicBillsApiV2PublicBillsGetResponse

## Example Usage

```typescript
import { ListPublicBillsApiV2PublicBillsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicBillsApiV2PublicBillsGetResponse = {
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
      view: {
        viewType: "list",
      },
      columns: [],
      page: 725074,
      pageSize: 30463,
      total: 493345,
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