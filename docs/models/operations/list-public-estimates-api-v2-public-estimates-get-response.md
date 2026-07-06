# ListPublicEstimatesApiV2PublicEstimatesGetResponse

## Example Usage

```typescript
import { ListPublicEstimatesApiV2PublicEstimatesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicEstimatesApiV2PublicEstimatesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      objectType: "<value>",
      view: {
        viewType: "list",
      },
      columns: [
        "<value 1>",
        "<value 2>",
      ],
      page: 518433,
      pageSize: 225080,
      total: 767525,
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
| `result`                                                                                                                                      | [models.ListPublicEstimatesApiV2PublicEstimatesGet200Envelope](../../models/list-public-estimates-api-v2-public-estimates-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |