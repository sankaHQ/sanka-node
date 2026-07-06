# ListPublicSubscriptionsApiV2PublicSubscriptionsGet200EnvelopeObjectRecordLineItemListData

## Example Usage

```typescript
import {
  ListPublicSubscriptionsApiV2PublicSubscriptionsGet200EnvelopeObjectRecordLineItemListData,
} from "sanka-sdk/models";

let value:
  ListPublicSubscriptionsApiV2PublicSubscriptionsGet200EnvelopeObjectRecordLineItemListData =
    {
      objectType: "<value>",
      view: {},
      columns: [
        "<value 1>",
        "<value 2>",
      ],
      page: 562533,
      pageSize: 272182,
      total: 509760,
    };
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `objectType`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `view`                                                                                | [models.ObjectRecordViewData](../models/object-record-view-data.md)                   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `columns`                                                                             | *string*[]                                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `columnLabels`                                                                        | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `items`                                                                               | [models.ObjectRecordLineItemRowData](../models/object-record-line-item-row-data.md)[] | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `page`                                                                                | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `pageSize`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `total`                                                                               | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | Record<string, *any*>                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `additionalProperties`                                                                | Record<string, *any*>                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |