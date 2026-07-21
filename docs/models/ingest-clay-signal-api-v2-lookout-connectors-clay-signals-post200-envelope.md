# IngestClaySignalApiV2LookoutConnectorsClaySignalsPost200Envelope

## Example Usage

```typescript
import { IngestClaySignalApiV2LookoutConnectorsClaySignalsPost200Envelope } from "sanka-sdk/models";

let value: IngestClaySignalApiV2LookoutConnectorsClaySignalsPost200Envelope = {
  success: true,
  data: {
    signalType: "<value>",
    dedupeKey: "<value>",
    id: "<id>",
    workspaceId: "<id>",
    receivedAt: new Date("2026-08-22T05:23:30.223Z"),
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *true*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [models.LookoutSignalData](../models/lookout-signal-data.md) | :heavy_check_mark:                                           | N/A                                                          |
| `meta`                                                       | [models.EnvelopeMeta](../models/envelope-meta.md)            | :heavy_check_mark:                                           | N/A                                                          |