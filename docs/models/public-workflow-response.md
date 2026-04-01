# PublicWorkflowResponse

## Example Usage

```typescript
import { PublicWorkflowResponse } from "sanka-sdk/models";

let value: PublicWorkflowResponse = {
  ok: false,
  status: "<value>",
  externalId: "<id>",
  workflowId: "<id>",
  validToRun: true,
  nodeCount: 100588,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ok`               | *boolean*          | :heavy_check_mark: | N/A                |
| `status`           | *string*           | :heavy_check_mark: | N/A                |
| `externalId`       | *string*           | :heavy_check_mark: | N/A                |
| `workflowId`       | *string*           | :heavy_check_mark: | N/A                |
| `validToRun`       | *boolean*          | :heavy_check_mark: | N/A                |
| `nodeCount`        | *number*           | :heavy_check_mark: | N/A                |
| `ctxId`            | *string*           | :heavy_minus_sign: | N/A                |