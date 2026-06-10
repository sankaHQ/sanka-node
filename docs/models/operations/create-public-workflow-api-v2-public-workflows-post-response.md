# CreatePublicWorkflowApiV2PublicWorkflowsPostResponse

## Example Usage

```typescript
import { CreatePublicWorkflowApiV2PublicWorkflowsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicWorkflowApiV2PublicWorkflowsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
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

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                         | Record<string, *string*[]>                                                                                                                        | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `result`                                                                                                                                          | [models.CreatePublicWorkflowApiV2PublicWorkflowsPost200Envelope](../../models/create-public-workflow-api-v2-public-workflows-post200-envelope.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |