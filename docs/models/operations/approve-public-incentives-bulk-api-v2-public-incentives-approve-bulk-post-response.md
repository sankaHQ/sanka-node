# ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPostResponse

## Example Usage

```typescript
import { ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPostResponse } from "sanka-sdk/models/operations";

let value:
  ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPostResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
      ],
      "key2": [],
    },
    result: {
      success: true,
      data: {},
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `result`                                                                                                                                                                                   | [models.ApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost200Envelope](../../models/approve-public-incentives-bulk-api-v2-public-incentives-approve-bulk-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |