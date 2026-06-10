# GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGetResponse

## Example Usage

```typescript
import { GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGetResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [
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

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `result`                                                                                                                                                                                  | [models.GetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet200Envelope](../../models/get-public-approval-rule-options-api-v2-public-approval-rules-options-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                        | N/A                                                                                                                                                                                       |