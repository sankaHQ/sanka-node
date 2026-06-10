# UpsertPublicLockRuleApiV2PublicLockRulesPostResponse

## Example Usage

```typescript
import { UpsertPublicLockRuleApiV2PublicLockRulesPostResponse } from "sanka-sdk/models/operations";

let value: UpsertPublicLockRuleApiV2PublicLockRulesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.UpsertPublicLockRuleApiV2PublicLockRulesPost200Envelope](../../models/upsert-public-lock-rule-api-v2-public-lock-rules-post200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |