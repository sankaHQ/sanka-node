# ListPublicItemsApiV2PublicItemsGetResponse

## Example Usage

```typescript
import { ListPublicItemsApiV2PublicItemsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicItemsApiV2PublicItemsGetResponse = {
  headers: {},
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
| `result`                                                                                                                      | [models.ListPublicItemsApiV2PublicItemsGet200Envelope](../../models/list-public-items-api-v2-public-items-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |