# PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPostResponse

## Example Usage

```typescript
import { PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPostResponse } from "sanka-sdk/models/operations";

let value:
  PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPostResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
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

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `result`                                                                                                                                                                               | [models.PreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost200Envelope](../../models/preview-public-workflow-compat-api-v2-public-workflow-runs-preview-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |