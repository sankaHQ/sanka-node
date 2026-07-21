# CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostRequest

## Example Usage

```typescript
import {
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostRequest,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostRequest =
    {
      disbursementId: "<id>",
      body: {
        amount: 3496.39,
      },
    };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `disbursementId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `lang`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `language`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `xWorkspaceCode`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `body`                                                                                               | [models.DisbursementAllocationCreateRequest](../../models/disbursement-allocation-create-request.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |