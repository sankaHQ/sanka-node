# QueryPublicRecordsApiV2PublicRecordsQueryPostResponse

## Example Usage

```typescript
import { QueryPublicRecordsApiV2PublicRecordsQueryPostResponse } from "sanka-sdk/models/operations";

let value: QueryPublicRecordsApiV2PublicRecordsQueryPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
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
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                            | Record<string, *string*[]>                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `result`                                                                                                                                             | [models.QueryPublicRecordsApiV2PublicRecordsQueryPost200Envelope](../../models/query-public-records-api-v2-public-records-query-post200-envelope.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |