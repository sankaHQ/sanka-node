# EnrichResponse

## Example Usage

```typescript
import { EnrichResponse } from "sanka-sdk/models";

let value: EnrichResponse = {
  data: {
    runId: "<id>",
    pipelineVersion: "<value>",
    requestHash: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [models.EnrichResponsePayload](../models/enrich-response-payload.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `message`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `ctxId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |