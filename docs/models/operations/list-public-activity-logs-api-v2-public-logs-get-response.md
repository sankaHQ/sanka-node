# ListPublicActivityLogsApiV2PublicLogsGetResponse

## Example Usage

```typescript
import { ListPublicActivityLogsApiV2PublicLogsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicActivityLogsApiV2PublicLogsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                  | Record<string, *string*[]>                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `result`                                                                                                                                   | [models.ListPublicActivityLogsApiV2PublicLogsGet200Envelope](../../models/list-public-activity-logs-api-v2-public-logs-get200-envelope.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |