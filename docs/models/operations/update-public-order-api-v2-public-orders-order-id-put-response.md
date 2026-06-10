# UpdatePublicOrderApiV2PublicOrdersOrderIdPutResponse

## Example Usage

```typescript
import { UpdatePublicOrderApiV2PublicOrdersOrderIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicOrderApiV2PublicOrdersOrderIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.UpdatePublicOrderApiV2PublicOrdersOrderIdPut200Envelope](../../models/update-public-order-api-v2-public-orders-order-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |