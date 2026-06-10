# EnrichRecordApiV2EnrichPostResponse

## Example Usage

```typescript
import { EnrichRecordApiV2EnrichPostResponse } from "sanka-sdk/models/operations";

let value: EnrichRecordApiV2EnrichPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      runId: "<id>",
      pipelineVersion: "<value>",
      requestHash: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [models.EnrichRecordApiV2EnrichPost200Envelope](../../models/enrich-record-api-v2-enrich-post200-envelope.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |