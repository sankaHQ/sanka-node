# ListPublicJournalsApiV2PublicJournalsGetResponse

## Example Usage

```typescript
import { ListPublicJournalsApiV2PublicJournalsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicJournalsApiV2PublicJournalsGetResponse = {
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
| `result`                                                                                                                                  | [models.ListPublicJournalsApiV2PublicJournalsGet200Envelope](../../models/list-public-journals-api-v2-public-journals-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |