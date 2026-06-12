# UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutResponse

## Example Usage

```typescript
import {
  UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPutResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
        ],
      },
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

| Field                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                            |
| `result`                                                                                                                                                                                                                                       | [models.UpdatePublicCustomObjectRecordApiV2PublicCustomObjectsCustomObjectIdRecordsRecordIdPut200Envelope](../../models/update-public-custom-object-record-api-v2-public-custom-objects-custom-object-id-records-record-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                            |