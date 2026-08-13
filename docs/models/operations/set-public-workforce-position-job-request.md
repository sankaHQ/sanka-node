# SetPublicWorkforcePositionJobRequest

## Example Usage

```typescript
import { SetPublicWorkforcePositionJobRequest } from "sanka-sdk/models/operations";

let value: SetPublicWorkforcePositionJobRequest = {
  positionId: "2f2d2892-5fcb-4336-91e8-08b1697a0ca6",
  body: {
    expectedVersion: 240041,
    jobId: "71ac352a-44ac-4b67-80d1-6e1e31098897",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `positionId`                                                      | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `workspaceId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `xWorkspaceCode`                                                  | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `body`                                                            | [models.PositionJobRequest](../../models/position-job-request.md) | :heavy_check_mark:                                                | N/A                                                               |