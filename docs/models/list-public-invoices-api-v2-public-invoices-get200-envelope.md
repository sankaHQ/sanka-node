# ListPublicInvoicesApiV2PublicInvoicesGet200Envelope

## Example Usage

```typescript
import { ListPublicInvoicesApiV2PublicInvoicesGet200Envelope } from "sanka-sdk/models";

let value: ListPublicInvoicesApiV2PublicInvoicesGet200Envelope = {
  success: true,
  data: {
    objectType: "<value>",
    view: {
      viewType: "list",
    },
    columns: [
      "<value 1>",
      "<value 2>",
    ],
    page: 49344,
    pageSize: 835042,
    total: 3045,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *true*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | *models.Response200ListPublicInvoicesApiV2PublicInvoicesGet* | :heavy_check_mark:                                           | N/A                                                          |
| `meta`                                                       | [models.EnvelopeMeta](../models/envelope-meta.md)            | :heavy_check_mark:                                           | N/A                                                          |