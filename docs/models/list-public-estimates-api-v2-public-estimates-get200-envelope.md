# ListPublicEstimatesApiV2PublicEstimatesGet200Envelope

## Example Usage

```typescript
import { ListPublicEstimatesApiV2PublicEstimatesGet200Envelope } from "sanka-sdk/models";

let value: ListPublicEstimatesApiV2PublicEstimatesGet200Envelope = {
  success: true,
  data: {
    objectType: "<value>",
    view: {
      viewType: "list",
    },
    columns: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    page: 415595,
    pageSize: 536509,
    total: 298205,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *true*                                                         | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | *models.Response200ListPublicEstimatesApiV2PublicEstimatesGet* | :heavy_check_mark:                                             | N/A                                                            |
| `meta`                                                         | [models.EnvelopeMeta](../models/envelope-meta.md)              | :heavy_check_mark:                                             | N/A                                                            |