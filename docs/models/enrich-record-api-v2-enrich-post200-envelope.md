# EnrichRecordApiV2EnrichPost200Envelope

## Example Usage

```typescript
import { EnrichRecordApiV2EnrichPost200Envelope } from "sanka-sdk/models";

let value: EnrichRecordApiV2EnrichPost200Envelope = {
  success: true,
  data: {
    runId: "<id>",
    pipelineVersion: "<value>",
    requestHash: "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *true*                                            | :heavy_check_mark:                                | N/A                                               |
| `data`                                            | [models.EnrichData](../models/enrich-data.md)     | :heavy_check_mark:                                | N/A                                               |
| `meta`                                            | [models.EnvelopeMeta](../models/envelope-meta.md) | :heavy_check_mark:                                | N/A                                               |