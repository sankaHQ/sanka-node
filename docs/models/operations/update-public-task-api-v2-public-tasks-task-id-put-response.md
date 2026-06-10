# UpdatePublicTaskApiV2PublicTasksTaskIdPutResponse

## Example Usage

```typescript
import { UpdatePublicTaskApiV2PublicTasksTaskIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicTaskApiV2PublicTasksTaskIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
| `result`                                                                                                                                      | [models.UpdatePublicTaskApiV2PublicTasksTaskIdPut200Envelope](../../models/update-public-task-api-v2-public-tasks-task-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |