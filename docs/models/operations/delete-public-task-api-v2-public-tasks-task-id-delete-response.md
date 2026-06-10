# DeletePublicTaskApiV2PublicTasksTaskIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicTaskApiV2PublicTasksTaskIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicTaskApiV2PublicTasksTaskIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    success: true,
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.DeletePublicTaskApiV2PublicTasksTaskIdDelete200Envelope](../../models/delete-public-task-api-v2-public-tasks-task-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |