# ListPublicSubscriptionsApiV2PublicSubscriptionsGetResponse

## Example Usage

```typescript
import { ListPublicSubscriptionsApiV2PublicSubscriptionsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicSubscriptionsApiV2PublicSubscriptionsGetResponse = {
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

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                    | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `result`                                                                                                                                                      | [models.ListPublicSubscriptionsApiV2PublicSubscriptionsGet200Envelope](../../models/list-public-subscriptions-api-v2-public-subscriptions-get200-envelope.md) | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |