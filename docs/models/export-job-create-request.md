# ExportJobCreateRequest

## Example Usage

```typescript
import { ExportJobCreateRequest } from "sanka-sdk/models";

let value: ExportJobCreateRequest = {
  objectType: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `objectType`              | *string*                  | :heavy_check_mark:        | N/A                       |
| `destinationKind`         | *string*                  | :heavy_minus_sign:        | N/A                       |
| `provider`                | *string*                  | :heavy_minus_sign:        | N/A                       |
| `targetSystem`            | *string*                  | :heavy_minus_sign:        | N/A                       |
| `channelId`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `operation`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `recordIds`               | *string*[]                | :heavy_minus_sign:        | N/A                       |
| `workspaceScope`          | *string*                  | :heavy_minus_sign:        | N/A                       |
| `customObjectId`          | *string*                  | :heavy_minus_sign:        | N/A                       |
| `limit`                   | *number*                  | :heavy_minus_sign:        | N/A                       |
| `fileFormat`              | *string*                  | :heavy_minus_sign:        | N/A                       |
| `dryRun`                  | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `workflowActionTrackerId` | *string*                  | :heavy_minus_sign:        | N/A                       |
| `actionTrackerId`         | *string*                  | :heavy_minus_sign:        | N/A                       |
| `keyField`                | *string*                  | :heavy_minus_sign:        | N/A                       |
| `exportSetItems`          | *boolean*                 | :heavy_minus_sign:        | N/A                       |
| `setCodeSource`           | *string*                  | :heavy_minus_sign:        | N/A                       |
| `mappingCustomFields`     | Record<string, *any*>     | :heavy_minus_sign:        | N/A                       |
| `mappingType`             | *string*                  | :heavy_minus_sign:        | N/A                       |
| `selectedCustomObject`    | *string*                  | :heavy_minus_sign:        | N/A                       |