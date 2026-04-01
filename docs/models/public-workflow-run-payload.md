# PublicWorkflowRunPayload

## Example Usage

```typescript
import { PublicWorkflowRunPayload } from "sanka-sdk/models";

let value: PublicWorkflowRunPayload = {
  runId: "<id>",
  workflowId: "<id>",
  status: "<value>",
  startedAt: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `runId`             | *string*            | :heavy_check_mark:  | N/A                 |
| `workflowId`        | *string*            | :heavy_check_mark:  | N/A                 |
| `workflowHistoryId` | *string*            | :heavy_minus_sign:  | N/A                 |
| `backgroundJobId`   | *string*            | :heavy_minus_sign:  | N/A                 |
| `status`            | *string*            | :heavy_check_mark:  | N/A                 |
| `startedAt`         | *string*            | :heavy_check_mark:  | N/A                 |
| `completedAt`       | *string*            | :heavy_minus_sign:  | N/A                 |