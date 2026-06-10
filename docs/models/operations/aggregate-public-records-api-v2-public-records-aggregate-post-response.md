# AggregatePublicRecordsApiV2PublicRecordsAggregatePostResponse

## Example Usage

```typescript
import { AggregatePublicRecordsApiV2PublicRecordsAggregatePostResponse } from "sanka-sdk/models/operations";

let value: AggregatePublicRecordsApiV2PublicRecordsAggregatePostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
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
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `result`                                                                                                                                                             | [models.AggregatePublicRecordsApiV2PublicRecordsAggregatePost200Envelope](../../models/aggregate-public-records-api-v2-public-records-aggregate-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |