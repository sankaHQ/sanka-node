# DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDeleteResponse

## Example Usage

```typescript
import {
  DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDeleteResponse,
} from "sanka-sdk/models/operations";

let value:
  DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDeleteResponse =
    {
      headers: {},
      result: {
        success: true,
        data: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `result`                                                                                                                                                                                                                       | [models.DeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete200Envelope](../../models/delete-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |