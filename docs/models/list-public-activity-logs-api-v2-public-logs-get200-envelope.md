# ListPublicActivityLogsApiV2PublicLogsGet200Envelope

## Example Usage

```typescript
import { ListPublicActivityLogsApiV2PublicLogsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicActivityLogsApiV2PublicLogsGet200Envelope = {
  success: true,
  data: {
    page: 318337,
    limit: 277609,
    count: 501493,
    total: 354664,
    hasNext: false,
    pagination: {
      page: 63517,
      limit: 615979,
      hasNext: false,
      total: 735416,
    },
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `success`                                                         | *true*                                                            | :heavy_check_mark:                                                | N/A                                                               |
| `data`                                                            | [models.ActivityLogListData](../models/activity-log-list-data.md) | :heavy_check_mark:                                                | N/A                                                               |
| `meta`                                                            | [models.EnvelopeMeta](../models/envelope-meta.md)                 | :heavy_check_mark:                                                | N/A                                                               |