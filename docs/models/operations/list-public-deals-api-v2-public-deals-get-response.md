# ListPublicDealsApiV2PublicDealsGetResponse

## Example Usage

```typescript
import { ListPublicDealsApiV2PublicDealsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicDealsApiV2PublicDealsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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
| `result`                                                                                                                      | [models.ListPublicDealsApiV2PublicDealsGet200Envelope](../../models/list-public-deals-api-v2-public-deals-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |