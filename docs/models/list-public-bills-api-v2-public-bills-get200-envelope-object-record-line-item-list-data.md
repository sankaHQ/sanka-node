# ListPublicBillsApiV2PublicBillsGet200EnvelopeObjectRecordLineItemListData

## Example Usage

```typescript
import { ListPublicBillsApiV2PublicBillsGet200EnvelopeObjectRecordLineItemListData } from "sanka-sdk/models";

let value:
  ListPublicBillsApiV2PublicBillsGet200EnvelopeObjectRecordLineItemListData = {
    objectType: "<value>",
    view: {},
    columns: [
      "<value 1>",
    ],
    page: 974745,
    pageSize: 829644,
    total: 454217,
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