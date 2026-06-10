# CreatePublicTaskApiV2PublicTasksPostResponse

## Example Usage

```typescript
import { CreatePublicTaskApiV2PublicTasksPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicTaskApiV2PublicTasksPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `result`                                                                                                                          | [models.CreatePublicTaskApiV2PublicTasksPost200Envelope](../../models/create-public-task-api-v2-public-tasks-post200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |