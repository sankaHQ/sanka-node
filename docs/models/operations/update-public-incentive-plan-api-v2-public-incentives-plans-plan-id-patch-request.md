# UpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatchRequest

## Example Usage

```typescript
import { UpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatchRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatchRequest = {
    planId: "<id>",
    body: {},
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `planId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.IncentivePlanUpdateRequest](../../models/incentive-plan-update-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |