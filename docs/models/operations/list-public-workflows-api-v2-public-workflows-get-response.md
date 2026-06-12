# ListPublicWorkflowsApiV2PublicWorkflowsGetResponse

## Example Usage

```typescript
import { ListPublicWorkflowsApiV2PublicWorkflowsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicWorkflowsApiV2PublicWorkflowsGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      total: 888368,
      page: 523010,
      pageSize: 758359,
      hasNextPage: true,
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