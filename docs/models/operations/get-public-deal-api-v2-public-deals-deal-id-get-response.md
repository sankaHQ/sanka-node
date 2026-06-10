# GetPublicDealApiV2PublicDealsDealIdGetResponse

## Example Usage

```typescript
import { GetPublicDealApiV2PublicDealsDealIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicDealApiV2PublicDealsDealIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [models.GetPublicDealApiV2PublicDealsDealIdGet200Envelope](../../models/get-public-deal-api-v2-public-deals-deal-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |