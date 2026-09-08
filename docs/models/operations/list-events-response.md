# ListEventsResponse

## Example Usage

```typescript
import { ListEventsResponse } from "sanka-sdk/models/operations";

let value: ListEventsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      events: [
        {
          sequence: 148368,
          kind: "<value>",
          message: "<value>",
          createdAt: new Date("2025-05-18T04:18:42.278Z"),
        },
      ],
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |
| `result`                                                                                                                                                                                      | [models.DeveloperCloudCloudRunEventsApiV2MigrateCloudRunsRunIdEventsGet200Envelope](../../models/developer-cloud-cloud-run-events-api-v2-migrate-cloud-runs-run-id-events-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |