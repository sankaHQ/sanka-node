# ListPublicSlipsApiV2PublicSlipsGetResponse

## Example Usage

```typescript
import { ListPublicSlipsApiV2PublicSlipsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicSlipsApiV2PublicSlipsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [models.ListPublicSlipsApiV2PublicSlipsGet200Envelope](../../models/list-public-slips-api-v2-public-slips-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |