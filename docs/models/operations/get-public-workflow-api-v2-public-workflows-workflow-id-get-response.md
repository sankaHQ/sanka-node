# GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGetResponse

## Example Usage

```typescript
import { GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      workflow: {
        id: "<id>",
      },
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.GetPublicWorkflowApiV2PublicWorkflowsWorkflowIdGet200Envelope](../../models/get-public-workflow-api-v2-public-workflows-workflow-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |