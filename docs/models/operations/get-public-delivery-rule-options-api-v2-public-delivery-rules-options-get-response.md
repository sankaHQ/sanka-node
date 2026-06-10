# GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGetResponse

## Example Usage

```typescript
import { GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGetResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key2": [],
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

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `result`                                                                                                                                                                                  | [models.GetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet200Envelope](../../models/get-public-delivery-rule-options-api-v2-public-delivery-rules-options-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                        | N/A                                                                                                                                                                                       |