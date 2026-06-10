# ListPublicLockRulesApiV2PublicLockRulesGetResponse

## Example Usage

```typescript
import { ListPublicLockRulesApiV2PublicLockRulesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicLockRulesApiV2PublicLockRulesGetResponse = {
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                       | Record<string, *string*[]>                                                                                                                      | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `result`                                                                                                                                        | [models.ListPublicLockRulesApiV2PublicLockRulesGet200Envelope](../../models/list-public-lock-rules-api-v2-public-lock-rules-get200-envelope.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |