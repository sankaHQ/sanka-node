# ListPublicWorkflowsApiV2PublicWorkflowsGetResponse

## Example Usage

```typescript
import { ListPublicWorkflowsApiV2PublicWorkflowsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicWorkflowsApiV2PublicWorkflowsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.ListPublicWorkflowsApiV2PublicWorkflowsGet200Envelope](../../models/list-public-workflows-api-v2-public-workflows-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |