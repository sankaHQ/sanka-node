# PublicWorkflowListResponse

## Example Usage

```typescript
import { PublicWorkflowListResponse } from "sanka-sdk/models";

let value: PublicWorkflowListResponse = {
  data: [
    {
      workflowId: "<id>",
      externalId: "<id>",
      isTriggerActive: true,
      validToRun: false,
    },
  ],
  count: 963871,
  page: 93671,
  limit: 905653,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [models.PublicWorkflowListItemResponse](../models/public-workflow-list-item-response.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `page`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `ctxId`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |