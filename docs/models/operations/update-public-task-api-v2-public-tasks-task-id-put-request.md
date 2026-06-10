# UpdatePublicTaskApiV2PublicTasksTaskIdPutRequest

## Example Usage

```typescript
import { UpdatePublicTaskApiV2PublicTasksTaskIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicTaskApiV2PublicTasksTaskIdPutRequest = {
  taskId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `taskId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |