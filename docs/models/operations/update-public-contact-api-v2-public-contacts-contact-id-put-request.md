# UpdatePublicContactApiV2PublicContactsContactIdPutRequest

## Example Usage

```typescript
import { UpdatePublicContactApiV2PublicContactsContactIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicContactApiV2PublicContactsContactIdPutRequest = {
  contactId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contactId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `externalId`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.PublicObjectRecordMutationRequest](../../models/public-object-record-mutation-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |