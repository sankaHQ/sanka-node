# RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostResponse

## Example Usage

```typescript
import { RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostResponse } from "sanka-sdk/models/operations";

let value: RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                               | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `result`                                                                                                                                                                 | [models.RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPost200Envelope](../../models/run-public-workflow-api-v2-public-workflows-workflow-id-run-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |