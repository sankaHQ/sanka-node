# UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchResponse

## Example Usage

```typescript
import { UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatchResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `result`                                                                                                                                                                  | [models.UpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch200Envelope](../../models/update-public-workflow-api-v2-public-workflows-workflow-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |