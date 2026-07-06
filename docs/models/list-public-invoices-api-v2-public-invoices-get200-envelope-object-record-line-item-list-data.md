# ListPublicInvoicesApiV2PublicInvoicesGet200EnvelopeObjectRecordLineItemListData

## Example Usage

```typescript
import { ListPublicInvoicesApiV2PublicInvoicesGet200EnvelopeObjectRecordLineItemListData } from "sanka-sdk/models";

let value:
  ListPublicInvoicesApiV2PublicInvoicesGet200EnvelopeObjectRecordLineItemListData =
    {
      objectType: "<value>",
      view: {},
      columns: [],
      page: 604841,
      pageSize: 527652,
      total: 597417,
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