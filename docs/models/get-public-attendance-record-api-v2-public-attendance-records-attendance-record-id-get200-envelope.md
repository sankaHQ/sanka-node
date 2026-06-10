# GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet200Envelope

## Example Usage

```typescript
import {
  GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet200Envelope,
} from "sanka-sdk/models";

let value:
  GetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet200Envelope =
    {
      success: true,
      data: {
        id: "<id>",
        recordId: "<id>",
        objectType: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.ObjectRecordData](../models/object-record-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |