# DeveloperCloudCloudRunEventsApiV2MigrateCloudRunsRunIdEventsGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudCloudRunEventsApiV2MigrateCloudRunsRunIdEventsGet200Envelope } from "sanka-sdk/models";

let value:
  DeveloperCloudCloudRunEventsApiV2MigrateCloudRunsRunIdEventsGet200Envelope = {
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
  };
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `success`                                                                                     | *true*                                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [models.DeveloperCloudCloudEventListData](../models/developer-cloud-cloud-event-list-data.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `meta`                                                                                        | [models.EnvelopeMeta](../models/envelope-meta.md)                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |