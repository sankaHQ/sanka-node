# ListPublicOrdersApiV2PublicOrdersGet200Envelope

## Example Usage

```typescript
import { ListPublicOrdersApiV2PublicOrdersGet200Envelope } from "sanka-sdk/models";

let value: ListPublicOrdersApiV2PublicOrdersGet200Envelope = {
  success: true,
  data: {
    objectType: "<value>",
    view: {
      viewType: "list",
    },
    columns: [
      "<value 1>",
    ],
    page: 758759,
    pageSize: 926373,
    total: 605950,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `success`                                                | *true*                                                   | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | *models.Response200ListPublicOrdersApiV2PublicOrdersGet* | :heavy_check_mark:                                       | N/A                                                      |
| `meta`                                                   | [models.EnvelopeMeta](../models/envelope-meta.md)        | :heavy_check_mark:                                       | N/A                                                      |