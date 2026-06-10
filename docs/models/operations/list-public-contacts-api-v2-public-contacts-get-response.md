# ListPublicContactsApiV2PublicContactsGetResponse

## Example Usage

```typescript
import { ListPublicContactsApiV2PublicContactsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicContactsApiV2PublicContactsGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicContactsApiV2PublicContactsGet200Envelope](../../models/list-public-contacts-api-v2-public-contacts-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |