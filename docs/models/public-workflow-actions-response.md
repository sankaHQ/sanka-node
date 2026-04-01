# PublicWorkflowActionsResponse

## Example Usage

```typescript
import { PublicWorkflowActionsResponse } from "sanka-sdk/models";

let value: PublicWorkflowActionsResponse = {
  data: [
    {
      actionUid: "<id>",
      isTrigger: true,
    },
  ],
  count: 414658,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [models.PublicWorkflowActionSchema](../models/public-workflow-action-schema.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |
| `count`                                                                           | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `ctxId`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |