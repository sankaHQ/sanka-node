# ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostResponse

## Example Usage

```typescript
import {
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostResponse,
} from "sanka-sdk/models/operations";

let value:
  ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key2": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      result: {
        success: true,
        data: {
          workspaceId: "91a4e88b-e478-4872-a92c-2be9903b6f1e",
          workflowId: "e27d7735-4a6f-43aa-bfc2-8468c78a5e16",
          requestId: "a0019845-9f68-45a9-b424-beba5567bbd9",
          planDigest: "<value>",
          definitionDigest: "<value>",
          status: "constructed",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `result`                                                                                                                                                                                                           | [models.ConstructPublicWorkflowFlowApiV2PublicWorkflowsWorkflowIdFlowConstructPost200Envelope](../../models/construct-public-workflow-flow-api-v2-public-workflows-workflow-id-flow-construct-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |