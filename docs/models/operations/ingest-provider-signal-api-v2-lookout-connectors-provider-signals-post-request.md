# IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostRequest

## Example Usage

```typescript
import { IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostRequest } from "sanka-sdk/models/operations";

let value:
  IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostRequest = {
    provider: "<value>",
    body: {
      signalType: "<value>",
      dedupeKey: "<value>",
    },
  };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `provider`                                                            | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `workspaceId`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `xWorkspaceCode`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `body`                                                                | [models.LookoutSignalRequest](../../models/lookout-signal-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |