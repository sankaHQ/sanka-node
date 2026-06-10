# ObjectRecordListData

## Example Usage

```typescript
import { ObjectRecordListData } from "sanka-sdk/models";

let value: ObjectRecordListData = {
  objectType: "<value>",
  view: {},
  columns: [],
  page: 606883,
  pageSize: 950485,
  total: 692980,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `objectType`                                                        | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `view`                                                              | [models.ObjectRecordViewData](../models/object-record-view-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `columns`                                                           | *string*[]                                                          | :heavy_check_mark:                                                  | N/A                                                                 |
| `columnLabels`                                                      | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `items`                                                             | [models.ObjectRecordData](../models/object-record-data.md)[]        | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page`                                                              | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `pageSize`                                                          | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `total`                                                             | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `meta`                                                              | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | N/A                                                                 |