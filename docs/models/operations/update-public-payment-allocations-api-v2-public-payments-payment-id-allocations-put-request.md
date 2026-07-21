# UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutRequest

## Example Usage

```typescript
import { UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutRequest =
    {
      paymentId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `externalId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `lang`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `language`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `workspaceId`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `acceptLanguage`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `xWorkspaceCode`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `body`                                                                                       | [models.PaymentAllocationsUpdateRequest](../../models/payment-allocations-update-request.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |