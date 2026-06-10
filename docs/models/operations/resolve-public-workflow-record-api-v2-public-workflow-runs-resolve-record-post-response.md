# ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPostResponse

## Example Usage

```typescript
import { ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPostResponse } from "sanka-sdk/models/operations";

let value:
  ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [],
        "key2": [
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |
| `result`                                                                                                                                                                                            | [models.ResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost200Envelope](../../models/resolve-public-workflow-record-api-v2-public-workflow-runs-resolve-record-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |