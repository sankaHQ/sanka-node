# StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPostResponse

## Example Usage

```typescript
import { StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPostResponse } from "sanka-sdk/models/operations";

let value: StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
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

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `result`                                                                                                                                                                       | [models.StartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost200Envelope](../../models/start-public-workflow-compat-api-v2-public-workflow-runs-start-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |