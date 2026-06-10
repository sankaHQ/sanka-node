# ListPublicTasksApiV2PublicTasksGetResponse

## Example Usage

```typescript
import { ListPublicTasksApiV2PublicTasksGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicTasksApiV2PublicTasksGetResponse = {
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [models.ListPublicTasksApiV2PublicTasksGet200Envelope](../../models/list-public-tasks-api-v2-public-tasks-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |