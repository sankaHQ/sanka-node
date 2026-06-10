# ListPublicEmployeesApiV2PublicEmployeesGetResponse

## Example Usage

```typescript
import { ListPublicEmployeesApiV2PublicEmployeesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicEmployeesApiV2PublicEmployeesGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
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
| `result`                                                                                                                                      | [models.ListPublicEmployeesApiV2PublicEmployeesGet200Envelope](../../models/list-public-employees-api-v2-public-employees-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |