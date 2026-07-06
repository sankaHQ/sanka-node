# ListPublicBillsApiV2PublicBillsGet200Envelope

## Example Usage

```typescript
import { ListPublicBillsApiV2PublicBillsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicBillsApiV2PublicBillsGet200Envelope = {
  success: true,
  data: {
    objectType: "<value>",
    view: {
      viewType: "list",
    },
    columns: [],
    page: 725074,
    pageSize: 30463,
    total: 493345,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *true*                                                 | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | *models.Response200ListPublicBillsApiV2PublicBillsGet* | :heavy_check_mark:                                     | N/A                                                    |
| `meta`                                                 | [models.EnvelopeMeta](../models/envelope-meta.md)      | :heavy_check_mark:                                     | N/A                                                    |