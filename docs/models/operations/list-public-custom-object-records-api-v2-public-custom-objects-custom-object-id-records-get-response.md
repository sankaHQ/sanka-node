# ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGetResponse

## Example Usage

```typescript
import {
  ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGetResponse,
} from "sanka-sdk/models/operations";

let value:
  ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGetResponse =
    {
      headers: {},
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

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `result`                                                                                                                                                                                                                   | [models.ListPublicCustomObjectRecordsApiV2PublicCustomObjectsCustomObjectIdRecordsGet200Envelope](../../models/list-public-custom-object-records-api-v2-public-custom-objects-custom-object-id-records-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |