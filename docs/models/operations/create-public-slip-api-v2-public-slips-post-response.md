# CreatePublicSlipApiV2PublicSlipsPostResponse

## Example Usage

```typescript
import { CreatePublicSlipApiV2PublicSlipsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicSlipApiV2PublicSlipsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
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
      "key2": "<value>",
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
| `result`                                                                                                                          | [models.CreatePublicSlipApiV2PublicSlipsPost200Envelope](../../models/create-public-slip-api-v2-public-slips-post200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |