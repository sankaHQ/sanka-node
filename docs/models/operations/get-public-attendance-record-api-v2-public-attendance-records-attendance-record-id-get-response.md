# GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGetResponse

## Example Usage

```typescript
import {
  GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGetResponse,
} from "sanka-sdk/models/operations";

let value:
  GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGetResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key1": [],
        "key2": [
          "<value 1>",
        ],
      },
      result: {
        success: true,
        data: {
          id: "<id>",
          recordId: "<id>",
          objectType: "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `result`                                                                                                                                                                                                           | [models.GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet200Envelope](../../models/get-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |