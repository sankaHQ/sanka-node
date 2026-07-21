# ListPublicBuyOffersApiV2PublicBuyOffersGet200Envelope

## Example Usage

```typescript
import { ListPublicBuyOffersApiV2PublicBuyOffersGet200Envelope } from "sanka-sdk/models";

let value: ListPublicBuyOffersApiV2PublicBuyOffersGet200Envelope = {
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
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *true*                                                                | :heavy_check_mark:                                                    | N/A                                                                   |
| `data`                                                                | [models.OfferSnapshotListData](../models/offer-snapshot-list-data.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [models.EnvelopeMeta](../models/envelope-meta.md)                     | :heavy_check_mark:                                                    | N/A                                                                   |