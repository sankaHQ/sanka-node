# UpdatePublicPaymentApiV2PublicPaymentsPaymentIdPutRequest

## Example Usage

```typescript
import { UpdatePublicPaymentApiV2PublicPaymentsPaymentIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicPaymentApiV2PublicPaymentsPaymentIdPutRequest = {
  paymentId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `paymentId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |