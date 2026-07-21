# IngestClaySignalApiV2LookoutConnectorsClaySignalsPostRequest

## Example Usage

```typescript
import { IngestClaySignalApiV2LookoutConnectorsClaySignalsPostRequest } from "sanka-sdk/models/operations";

let value: IngestClaySignalApiV2LookoutConnectorsClaySignalsPostRequest = {
  body: {
    signalType: "<value>",
    dedupeKey: "<value>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `workspaceId`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `xWorkspaceCode`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `body`                                                                | [models.LookoutSignalRequest](../../models/lookout-signal-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |