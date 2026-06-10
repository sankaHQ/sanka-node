# DeletePublicPaymentApiV2PublicPaymentsPaymentIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicPaymentApiV2PublicPaymentsPaymentIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicPaymentApiV2PublicPaymentsPaymentIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
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

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.DeletePublicPaymentApiV2PublicPaymentsPaymentIdDelete200Envelope](../../models/delete-public-payment-api-v2-public-payments-payment-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |