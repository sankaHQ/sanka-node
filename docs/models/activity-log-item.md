# ActivityLogItem

## Example Usage

```typescript
import { ActivityLogItem } from "sanka-sdk/models";

let value: ActivityLogItem = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `displayId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `action`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `target`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `objectType`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `objectId`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `objectDisplay`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `fieldName`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `oldValue`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `newValue`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `actionUid`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `actor`                                                                | [models.ActivityLogActor](../models/activity-log-actor.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `environment`                                                          | [models.ActivityLogEnvironment](../models/activity-log-environment.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `governanceExecutionId`                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `createdAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |