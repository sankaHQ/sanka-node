# ReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPutRequest

## Example Usage

```typescript
import { ReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPutRequest } from "sanka-sdk/models/operations";

let value:
  ReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPutRequest =
    {
      body: {
        sourceObjectType: "<value>",
        sourceRecordId: "<id>",
      },
    };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `xWorkspaceCode`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `body`                                                                                             | [models.IncentiveAllocationsReplaceRequest](../../models/incentive-allocations-replace-request.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |