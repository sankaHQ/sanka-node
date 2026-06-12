# GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGetResponse

## Example Usage

```typescript
import {
  GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGetResponse,
} from "sanka-sdk/models/operations";

let value:
  GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGetResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
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

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |
| `result`                                                                                                                                                                                                                                 | [models.GetPublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdGet200Envelope](../../models/get-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |