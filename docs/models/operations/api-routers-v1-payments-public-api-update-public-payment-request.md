# ApiRoutersV1PaymentsPublicApiUpdatePublicPaymentRequest

## Example Usage

```typescript
import { ApiRoutersV1PaymentsPublicApiUpdatePublicPaymentRequest } from "sanka-sdk/models/operations";

let value: ApiRoutersV1PaymentsPublicApiUpdatePublicPaymentRequest = {
  paymentId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `paymentId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `externalId`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `body`                                                                | [models.PublicPaymentRequest](../../models/public-payment-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |