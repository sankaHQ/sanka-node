# DeveloperCloudCloudEventListData

## Example Usage

```typescript
import { DeveloperCloudCloudEventListData } from "sanka-sdk/models";

let value: DeveloperCloudCloudEventListData = {
  events: [
    {
      sequence: 148368,
      kind: "<value>",
      message: "<value>",
      createdAt: new Date("2025-05-18T04:18:42.278Z"),
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `events`                                                                               | [models.DeveloperCloudCloudEventData](../models/developer-cloud-cloud-event-data.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |