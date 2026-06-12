# ActivityLogListData

## Example Usage

```typescript
import { ActivityLogListData } from "sanka-sdk/models";

let value: ActivityLogListData = {
  page: 288714,
  limit: 137118,
  count: 89337,
  total: 376891,
  hasNext: false,
  pagination: {
    page: 63517,
    limit: 615979,
    hasNext: false,
    total: 735416,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `logs`                                                               | [models.ActivityLogItem](../models/activity-log-item.md)[]           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `page`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `total`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `hasNext`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `nextPage`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ActivityLogPagination](../models/activity-log-pagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `message`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |