# ListPublicInvoicesApiV2PublicInvoicesGet200Envelope

## Example Usage

```typescript
import { ListPublicInvoicesApiV2PublicInvoicesGet200Envelope } from "sanka-sdk/models";

let value: ListPublicInvoicesApiV2PublicInvoicesGet200Envelope = {
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
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `success`                                                           | *true*                                                              | :heavy_check_mark:                                                  | N/A                                                                 |
| `data`                                                              | [models.ObjectRecordListData](../models/object-record-list-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `meta`                                                              | [models.EnvelopeMeta](../models/envelope-meta.md)                   | :heavy_check_mark:                                                  | N/A                                                                 |