# GetPublicPaymentApiV2PublicPaymentsPaymentIdGetResponse

## Example Usage

```typescript
import { GetPublicPaymentApiV2PublicPaymentsPaymentIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicPaymentApiV2PublicPaymentsPaymentIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.GetPublicPaymentApiV2PublicPaymentsPaymentIdGet200Envelope](../../models/get-public-payment-api-v2-public-payments-payment-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |