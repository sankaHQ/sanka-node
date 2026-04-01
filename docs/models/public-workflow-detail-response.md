# PublicWorkflowDetailResponse

## Example Usage

```typescript
import { PublicWorkflowDetailResponse } from "sanka-sdk/models";

let value: PublicWorkflowDetailResponse = {
  workflowId: "<id>",
  externalId: "<id>",
  isTriggerActive: false,
  validToRun: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `workflowId`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `externalId`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `title`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `status`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `triggerType`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `triggerEvery`                                                                    | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `isTriggerActive`                                                                 | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `validToRun`                                                                      | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `nodes`                                                                           | [models.PublicWorkflowNodeResponse](../models/public-workflow-node-response.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `ctxId`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |