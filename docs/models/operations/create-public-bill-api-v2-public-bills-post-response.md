# CreatePublicBillApiV2PublicBillsPostResponse

## Example Usage

```typescript
import { CreatePublicBillApiV2PublicBillsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicBillApiV2PublicBillsPostResponse = {
  headers: {
    "key": [],
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
| `result`                                                                                                                          | [models.CreatePublicBillApiV2PublicBillsPost200Envelope](../../models/create-public-bill-api-v2-public-bills-post200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |