# ScoreRecordApiV2ScorePostResponse

## Example Usage

```typescript
import { ScoreRecordApiV2ScorePostResponse } from "sanka-sdk/models/operations";

let value: ScoreRecordApiV2ScorePostResponse = {
  headers: {
    "key": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [models.ScoreRecordApiV2ScorePost200Envelope](../../models/score-record-api-v2-score-post200-envelope.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |