# ListPublicMetersApiV2PublicMetersGetResponse

## Example Usage

```typescript
import { ListPublicMetersApiV2PublicMetersGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicMetersApiV2PublicMetersGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `result`                                                                                                                          | [models.ListPublicMetersApiV2PublicMetersGet200Envelope](../../models/list-public-meters-api-v2-public-meters-get200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |