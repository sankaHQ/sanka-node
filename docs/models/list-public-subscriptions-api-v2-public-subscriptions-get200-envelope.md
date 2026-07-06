# ListPublicSubscriptionsApiV2PublicSubscriptionsGet200Envelope

## Example Usage

```typescript
import { ListPublicSubscriptionsApiV2PublicSubscriptionsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicSubscriptionsApiV2PublicSubscriptionsGet200Envelope = {
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
    page: 480933,
    pageSize: 733871,
    total: 454551,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *true*                                                                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | *models.Response200ListPublicSubscriptionsApiV2PublicSubscriptionsGet* | :heavy_check_mark:                                                     | N/A                                                                    |
| `meta`                                                                 | [models.EnvelopeMeta](../models/envelope-meta.md)                      | :heavy_check_mark:                                                     | N/A                                                                    |