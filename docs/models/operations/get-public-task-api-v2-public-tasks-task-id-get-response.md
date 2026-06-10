# GetPublicTaskApiV2PublicTasksTaskIdGetResponse

## Example Usage

```typescript
import { GetPublicTaskApiV2PublicTasksTaskIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicTaskApiV2PublicTasksTaskIdGetResponse = {
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
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [models.GetPublicTaskApiV2PublicTasksTaskIdGet200Envelope](../../models/get-public-task-api-v2-public-tasks-task-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |