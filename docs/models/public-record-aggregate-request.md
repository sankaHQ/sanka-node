# PublicRecordAggregateRequest

## Example Usage

```typescript
import { PublicRecordAggregateRequest } from "sanka-sdk/models";

let value: PublicRecordAggregateRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `objectType`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `scope`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `externalObjectType`                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `provider`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `channelId`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `select`                                                           | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `matchFields`                                                      | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `minCount`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `scanLimit`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `search`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `q`                                                                | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `sort`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `filters`                                                          | [models.RecordFilterRequest](../models/record-filter-request.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `mode`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `page`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `metrics`                                                          | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `groupBy`                                                          | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `additionalProperties`                                             | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |