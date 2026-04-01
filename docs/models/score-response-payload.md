# ScoreResponsePayload

## Example Usage

```typescript
import { ScoreResponsePayload } from "sanka-sdk/models";

let value: ScoreResponsePayload = {
  objectType: "<value>",
  recordId: "<id>",
  snapshotId: "<id>",
  algorithmKey: "<value>",
  algorithmVersion: "<value>",
  inputHash: "<value>",
  outputHash: "<value>",
  score: 404811,
  band: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `objectType`            | *string*                | :heavy_check_mark:      | N/A                     |
| `recordId`              | *string*                | :heavy_check_mark:      | N/A                     |
| `snapshotId`            | *string*                | :heavy_check_mark:      | N/A                     |
| `algorithmKey`          | *string*                | :heavy_check_mark:      | N/A                     |
| `algorithmVersion`      | *string*                | :heavy_check_mark:      | N/A                     |
| `scoreModelId`          | *string*                | :heavy_minus_sign:      | N/A                     |
| `scoreModelName`        | *string*                | :heavy_minus_sign:      | N/A                     |
| `scoreModelVersion`     | *number*                | :heavy_minus_sign:      | N/A                     |
| `inputHash`             | *string*                | :heavy_check_mark:      | N/A                     |
| `outputHash`            | *string*                | :heavy_check_mark:      | N/A                     |
| `score`                 | *number*                | :heavy_check_mark:      | N/A                     |
| `band`                  | *string*                | :heavy_check_mark:      | N/A                     |
| `dimensions`            | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `reasons`               | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `explanation`           | *string*                | :heavy_minus_sign:      | N/A                     |