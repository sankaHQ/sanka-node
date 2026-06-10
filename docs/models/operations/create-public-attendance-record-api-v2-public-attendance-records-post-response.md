# CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPostResponse

## Example Usage

```typescript
import { CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPostResponse } from "sanka-sdk/models/operations";

let value:
  CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPostResponse = {
    headers: {
      "key": [],
    },
    result: {
      success: true,
      data: {
        "key": "<value>",
        "key1": "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `result`                                                                                                                                                                            | [models.CreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPost200Envelope](../../models/create-public-attendance-record-api-v2-public-attendance-records-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |