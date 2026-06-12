# CreatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsPostRequest

## Example Usage

```typescript
import {
  CreatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsPostRequest,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsPostRequest =
    {
      customObjectId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `customObjectId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordCreateRequest](../../models/object-record-create-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |