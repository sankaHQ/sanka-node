# ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGetResponse

## Example Usage

```typescript
import { ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGetResponse =
  {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    result: {
      success: true,
      data: {
        objectType: "<value>",
        view: {},
        columns: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        page: 649857,
        pageSize: 653504,
        total: 801424,
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `result`                                                                                                                                                                        | [models.ListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet200Envelope](../../models/list-public-attendance-records-api-v2-public-attendance-records-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |