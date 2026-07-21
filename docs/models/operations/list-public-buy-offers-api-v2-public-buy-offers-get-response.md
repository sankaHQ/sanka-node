# ListPublicBuyOffersApiV2PublicBuyOffersGetResponse

## Example Usage

```typescript
import { ListPublicBuyOffersApiV2PublicBuyOffersGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicBuyOffersApiV2PublicBuyOffersGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      items: [],
      page: 383835,
      pageSize: 449683,
      total: 716546,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                       | Record<string, *string*[]>                                                                                                                      | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `result`                                                                                                                                        | [models.ListPublicBuyOffersApiV2PublicBuyOffersGet200Envelope](../../models/list-public-buy-offers-api-v2-public-buy-offers-get200-envelope.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |