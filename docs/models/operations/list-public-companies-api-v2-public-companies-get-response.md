# ListPublicCompaniesApiV2PublicCompaniesGetResponse

## Example Usage

```typescript
import { ListPublicCompaniesApiV2PublicCompaniesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicCompaniesApiV2PublicCompaniesGetResponse = {
  headers: {
    "key": [
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.ListPublicCompaniesApiV2PublicCompaniesGet200Envelope](../../models/list-public-companies-api-v2-public-companies-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |