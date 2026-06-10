# ListPublicActivityLogsApiV2PublicLogsGetResponse

## Example Usage

```typescript
import { ListPublicActivityLogsApiV2PublicLogsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicActivityLogsApiV2PublicLogsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
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