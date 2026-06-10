# ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePostResponse

## Example Usage

```typescript
import { ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePostResponse } from "sanka-sdk/models/operations";

let value:
  ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePostResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    result: {
      success: true,
      data: {
        "key": "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `result`                                                                                                                                                                                       | [models.ApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost200Envelope](../../models/approve-public-incentive-api-v2-public-incentives-incentive-id-approve-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |