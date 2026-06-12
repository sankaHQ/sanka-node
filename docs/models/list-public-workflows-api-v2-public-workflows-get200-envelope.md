# ListPublicWorkflowsApiV2PublicWorkflowsGet200Envelope

## Example Usage

```typescript
import { ListPublicWorkflowsApiV2PublicWorkflowsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicWorkflowsApiV2PublicWorkflowsGet200Envelope = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.WorkflowListData](../models/workflow-list-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |