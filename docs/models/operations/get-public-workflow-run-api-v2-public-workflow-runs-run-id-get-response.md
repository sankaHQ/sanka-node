# GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGetResponse

## Example Usage

```typescript
import { GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `result`                                                                                                                                                            | [models.GetPublicWorkflowRunApiV2PublicWorkflowRunsRunIdGet200Envelope](../../models/get-public-workflow-run-api-v2-public-workflow-runs-run-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |