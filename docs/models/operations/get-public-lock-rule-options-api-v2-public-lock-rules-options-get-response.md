# GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGetResponse

## Example Usage

```typescript
import { GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `result`                                                                                                                                                                  | [models.GetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet200Envelope](../../models/get-public-lock-rule-options-api-v2-public-lock-rules-options-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |