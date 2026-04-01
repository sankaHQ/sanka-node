# PublicWorkflowRunResponse

## Example Usage

```typescript
import { PublicWorkflowRunResponse } from "sanka-sdk/models";

let value: PublicWorkflowRunResponse = {
  data: {
    runId: "<id>",
    workflowId: "<id>",
    status: "<value>",
    startedAt: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [models.PublicWorkflowRunPayload](../models/public-workflow-run-payload.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `message`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `ctxId`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |