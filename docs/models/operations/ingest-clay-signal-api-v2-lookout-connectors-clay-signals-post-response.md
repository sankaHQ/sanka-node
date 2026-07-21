# IngestClaySignalApiV2LookoutConnectorsClaySignalsPostResponse

## Example Usage

```typescript
import { IngestClaySignalApiV2LookoutConnectorsClaySignalsPostResponse } from "sanka-sdk/models/operations";

let value: IngestClaySignalApiV2LookoutConnectorsClaySignalsPostResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.IngestClaySignalApiV2LookoutConnectorsClaySignalsPost200Envelope](../../models/ingest-clay-signal-api-v2-lookout-connectors-clay-signals-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |