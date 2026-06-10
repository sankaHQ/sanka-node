# UpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPostRequest

## Example Usage

```typescript
import {
  UpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPostRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPostRequest =
    {
      recordId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `recordId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `workspaceId`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `xWorkspaceCode`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `body`                                                                                                         | [models.PublicCustomObjectRecordMutationRequest](../../models/public-custom-object-record-mutation-request.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |