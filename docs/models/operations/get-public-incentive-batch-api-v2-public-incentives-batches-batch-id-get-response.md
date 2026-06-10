# GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGetResponse

## Example Usage

```typescript
import { GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGetResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key2": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    result: {
      success: true,
      data: {
        "key": "<value>",
        "key1": "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `result`                                                                                                                                                                                | [models.GetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet200Envelope](../../models/get-public-incentive-batch-api-v2-public-incentives-batches-batch-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |