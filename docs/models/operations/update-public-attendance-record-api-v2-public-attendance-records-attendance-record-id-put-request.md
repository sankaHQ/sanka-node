# UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutRequest

## Example Usage

```typescript
import {
  UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutRequest =
    {
      attendanceRecordId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `attendanceRecordId`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |