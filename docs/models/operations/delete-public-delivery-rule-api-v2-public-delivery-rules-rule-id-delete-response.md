# DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDeleteResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
      ],
      "key1": [
        "<value 1>",
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

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `result`                                                                                                                                                                              | [models.DeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete200Envelope](../../models/delete-public-delivery-rule-api-v2-public-delivery-rules-rule-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |