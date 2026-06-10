# DeletePublicDealApiV2PublicDealsDealIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicDealApiV2PublicDealsDealIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicDealApiV2PublicDealsDealIdDeleteResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.DeletePublicDealApiV2PublicDealsDealIdDelete200Envelope](../../models/delete-public-deal-api-v2-public-deals-deal-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |