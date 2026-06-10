# UpdatePublicItemApiV2PublicItemsItemIdPutRequest

## Example Usage

```typescript
import { UpdatePublicItemApiV2PublicItemsItemIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicItemApiV2PublicItemsItemIdPutRequest = {
  itemId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `itemId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |