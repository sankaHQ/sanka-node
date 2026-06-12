# UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutRequest

## Example Usage

```typescript
import {
  UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutRequest =
    {
      customObjectId: "<id>",
      recordId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customObjectId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `recordId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |