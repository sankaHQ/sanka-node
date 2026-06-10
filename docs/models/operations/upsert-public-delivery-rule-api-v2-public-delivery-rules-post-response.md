# UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPostResponse

## Example Usage

```typescript
import { UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPostResponse } from "sanka-sdk/models/operations";

let value: UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `result`                                                                                                                                                            | [models.UpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost200Envelope](../../models/upsert-public-delivery-rule-api-v2-public-delivery-rules-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |