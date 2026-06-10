# GetPublicOrderApiV2PublicOrdersOrderIdGetResponse

## Example Usage

```typescript
import { GetPublicOrderApiV2PublicOrdersOrderIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicOrderApiV2PublicOrdersOrderIdGetResponse = {
  headers: {
    "key": [],
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.GetPublicOrderApiV2PublicOrdersOrderIdGet200Envelope](../../models/get-public-order-api-v2-public-orders-order-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |