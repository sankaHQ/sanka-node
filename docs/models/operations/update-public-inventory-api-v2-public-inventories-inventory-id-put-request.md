# UpdatePublicInventoryApiV2PublicInventoriesInventoryIdPutRequest

## Example Usage

```typescript
import { UpdatePublicInventoryApiV2PublicInventoriesInventoryIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicInventoryApiV2PublicInventoriesInventoryIdPutRequest = {
  inventoryId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `inventoryId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `externalId`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.PublicObjectRecordMutationRequest](../../models/public-object-record-mutation-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |