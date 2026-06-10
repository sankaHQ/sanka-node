# ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePostResponse

## Example Usage

```typescript
import {
  ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePostResponse,
} from "sanka-sdk/models/operations";

let value:
  ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                         | [models.ApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost200Envelope](../../models/approve-public-incentive-batch-api-v2-public-incentives-batches-batch-id-approve-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |