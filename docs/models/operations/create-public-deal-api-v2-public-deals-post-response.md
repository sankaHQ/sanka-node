# CreatePublicDealApiV2PublicDealsPostResponse

## Example Usage

```typescript
import { CreatePublicDealApiV2PublicDealsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicDealApiV2PublicDealsPostResponse = {
  headers: {
    "key": [],
    "key1": [],
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

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `result`                                                                                                                          | [models.CreatePublicDealApiV2PublicDealsPost200Envelope](../../models/create-public-deal-api-v2-public-deals-post200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |