# CreatePublicPaymentApiV2PublicPaymentsPostResponse

## Example Usage

```typescript
import { CreatePublicPaymentApiV2PublicPaymentsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicPaymentApiV2PublicPaymentsPostResponse = {
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
    data: {},
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
| `result`                                                                                                                                      | [models.CreatePublicPaymentApiV2PublicPaymentsPost200Envelope](../../models/create-public-payment-api-v2-public-payments-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |