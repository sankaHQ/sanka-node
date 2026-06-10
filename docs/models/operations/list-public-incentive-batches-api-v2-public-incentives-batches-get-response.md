# ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGetResponse

## Example Usage

```typescript
import { ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |
| `result`                                                                                                                                                                      | [models.ListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet200Envelope](../../models/list-public-incentive-batches-api-v2-public-incentives-batches-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                            | N/A                                                                                                                                                                           |