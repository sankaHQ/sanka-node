# CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostResponse

## Example Usage

```typescript
import { CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPostResponse =
  {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
      ],
      "key1": [],
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

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `result`                                                                                                                                                                        | [models.CreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPost200Envelope](../../models/create-public-incentive-batch-api-v2-public-incentives-batches-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |