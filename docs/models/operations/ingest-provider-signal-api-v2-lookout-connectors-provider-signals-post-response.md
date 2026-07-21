# IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostResponse

## Example Usage

```typescript
import { IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostResponse } from "sanka-sdk/models/operations";

let value:
  IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostResponse = {
    headers: {
      "key": [],
      "key1": [],
      "key2": [],
    },
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

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `result`                                                                                                                                                                              | [models.IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPost200Envelope](../../models/ingest-provider-signal-api-v2-lookout-connectors-provider-signals-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |