# ListPublicApprovalRulesApiV2PublicApprovalRulesGetResponse

## Example Usage

```typescript
import { ListPublicApprovalRulesApiV2PublicApprovalRulesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicApprovalRulesApiV2PublicApprovalRulesGetResponse = {
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
    "key2": [],
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

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.ListPublicApprovalRulesApiV2PublicApprovalRulesGet200Envelope](../../models/list-public-approval-rules-api-v2-public-approval-rules-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |