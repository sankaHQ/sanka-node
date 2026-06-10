# UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutResponse

## Example Usage

```typescript
import {
  UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPutResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `result`                                                                                                                                                                                                                 | [models.UpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut200Envelope](../../models/update-public-attendance-record-api-v2-public-attendance-records-attendance-record-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |