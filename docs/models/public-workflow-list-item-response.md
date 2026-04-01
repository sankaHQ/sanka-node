# PublicWorkflowListItemResponse

## Example Usage

```typescript
import { PublicWorkflowListItemResponse } from "sanka-sdk/models";

let value: PublicWorkflowListItemResponse = {
  workflowId: "<id>",
  externalId: "<id>",
  isTriggerActive: true,
  validToRun: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `workflowId`       | *string*           | :heavy_check_mark: | N/A                |
| `externalId`       | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `status`           | *string*           | :heavy_minus_sign: | N/A                |
| `triggerType`      | *string*           | :heavy_minus_sign: | N/A                |
| `triggerEvery`     | *number*           | :heavy_minus_sign: | N/A                |
| `isTriggerActive`  | *boolean*          | :heavy_check_mark: | N/A                |
| `validToRun`       | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *string*           | :heavy_minus_sign: | N/A                |