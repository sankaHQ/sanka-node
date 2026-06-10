# UpdatePublicDealApiV2PublicDealsDealIdPutResponse

## Example Usage

```typescript
import { UpdatePublicDealApiV2PublicDealsDealIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicDealApiV2PublicDealsDealIdPutResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.UpdatePublicDealApiV2PublicDealsDealIdPut200Envelope](../../models/update-public-deal-api-v2-public-deals-deal-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |