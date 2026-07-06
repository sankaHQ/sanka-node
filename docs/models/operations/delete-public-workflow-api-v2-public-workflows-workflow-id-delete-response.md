# DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
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

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `result`                                                                                                                                                                    | [models.DeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete200Envelope](../../models/delete-public-workflow-api-v2-public-workflows-workflow-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |