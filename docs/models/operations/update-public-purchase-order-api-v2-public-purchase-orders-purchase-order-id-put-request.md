# UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutRequest

## Example Usage

```typescript
import { UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicPurchaseOrderApiV2PublicPurchaseOrdersPurchaseOrderIdPutRequest =
    {
      purchaseOrderId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `purchaseOrderId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |