# ListPublicTicketsApiV2PublicTicketsGetResponse

## Example Usage

```typescript
import { ListPublicTicketsApiV2PublicTicketsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicTicketsApiV2PublicTicketsGetResponse = {
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

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                             | Record<string, *string*[]>                                                                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `result`                                                                                                                              | [models.ListPublicTicketsApiV2PublicTicketsGet200Envelope](../../models/list-public-tickets-api-v2-public-tickets-get200-envelope.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |