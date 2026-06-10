# CreatePublicIncentivePlanApiV2PublicIncentivesPlansPostRequest

## Example Usage

```typescript
import { CreatePublicIncentivePlanApiV2PublicIncentivesPlansPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicIncentivePlanApiV2PublicIncentivesPlansPostRequest = {
  body: {
    name: "<value>",
    baseEvent: "<value>",
    rateType: "<value>",
    rateValue: 1559.77,
    effectiveFrom: new Date("2024-08-19"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.IncentivePlanCreateRequest](../../models/incentive-plan-create-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |