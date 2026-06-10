# CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostRequest

## Example Usage

```typescript
import { CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostRequest = {
  body: {
    period: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `xWorkspaceCode`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `body`                                                                               | [models.IncentiveBatchCreateRequest](../../models/incentive-batch-create-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |