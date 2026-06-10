# DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDeleteResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `result`                                                                                                                                                                                    | [models.DeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete200Envelope](../../models/delete-public-incentive-plan-api-v2-public-incentives-plans-plan-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |