# ScoreResponse

## Example Usage

```typescript
import { ScoreResponse } from "sanka-sdk/models";

let value: ScoreResponse = {
  data: {
    objectType: "<value>",
    recordId: "<id>",
    snapshotId: "<id>",
    algorithmKey: "<value>",
    algorithmVersion: "<value>",
    inputHash: "<value>",
    outputHash: "<value>",
    score: 131952,
    band: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.ScoreResponsePayload](../models/score-response-payload.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `ctxId`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |