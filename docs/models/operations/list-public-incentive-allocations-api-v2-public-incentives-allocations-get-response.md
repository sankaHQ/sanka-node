# ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGetResponse

## Example Usage

```typescript
import { ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGetResponse } from "sanka-sdk/models/operations";

let value:
  ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGetResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
      ],
      "key1": [
        "<value 1>",
      ],
      "key2": [
        "<value 1>",
      ],
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

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |
| `result`                                                                                                                                                                                      | [models.ListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet200Envelope](../../models/list-public-incentive-allocations-api-v2-public-incentives-allocations-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |