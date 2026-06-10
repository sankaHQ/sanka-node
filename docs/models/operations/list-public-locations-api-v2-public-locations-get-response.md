# ListPublicLocationsApiV2PublicLocationsGetResponse

## Example Usage

```typescript
import { ListPublicLocationsApiV2PublicLocationsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicLocationsApiV2PublicLocationsGetResponse = {
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.ListPublicLocationsApiV2PublicLocationsGet200Envelope](../../models/list-public-locations-api-v2-public-locations-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |