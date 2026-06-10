# CalculatePublicIncentivesApiV2PublicIncentivesCalculatePostRequest

## Example Usage

```typescript
import { CalculatePublicIncentivesApiV2PublicIncentivesCalculatePostRequest } from "sanka-sdk/models/operations";

let value: CalculatePublicIncentivesApiV2PublicIncentivesCalculatePostRequest =
  {
    body: {
      period: "<value>",
    },
  };
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `workspaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `xWorkspaceCode`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `body`                                                                          | [models.IncentiveCalculateRequest](../../models/incentive-calculate-request.md) | :heavy_check_mark:                                                              | N/A                                                                             |