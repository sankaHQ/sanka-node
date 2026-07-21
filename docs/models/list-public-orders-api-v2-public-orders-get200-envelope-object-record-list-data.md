# ListPublicOrdersApiV2PublicOrdersGet200EnvelopeObjectRecordListData

## Example Usage

```typescript
import { ListPublicOrdersApiV2PublicOrdersGet200EnvelopeObjectRecordListData } from "sanka-sdk/models";

let value: ListPublicOrdersApiV2PublicOrdersGet200EnvelopeObjectRecordListData =
  {
    objectType: "<value>",
    view: {},
    columns: [
      "<value 1>",
      "<value 2>",
    ],
    page: 319777,
    pageSize: 438625,
    total: 9543,
  };
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `objectType`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `view`                                                                            | [models.ObjectRecordViewData](../models/object-record-view-data.md)               | :heavy_check_mark:                                                                | N/A                                                                               |
| `columns`                                                                         | *string*[]                                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `columnLabels`                                                                    | Record<string, *string*>                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `items`                                                                           | [models.ObjectRecordData](../models/object-record-data.md)[]                      | :heavy_minus_sign:                                                                | N/A                                                                               |
| `page`                                                                            | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `pageSize`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `total`                                                                           | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `nextCursor`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `subtotals`                                                                       | [models.ObjectRecordSubtotalResult](../models/object-record-subtotal-result.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `meta`                                                                            | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | N/A                                                                               |
| `additionalProperties`                                                            | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | N/A                                                                               |