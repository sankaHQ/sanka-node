# CreatePublicDisbursementApiV2PublicDisbursementsPostResponse

## Example Usage

```typescript
import { CreatePublicDisbursementApiV2PublicDisbursementsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicDisbursementApiV2PublicDisbursementsPostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.CreatePublicDisbursementApiV2PublicDisbursementsPost200Envelope](../../models/create-public-disbursement-api-v2-public-disbursements-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |