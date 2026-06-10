# CreateApprovalRequestApiV2PublicApprovalRequestsPostResponse

## Example Usage

```typescript
import { CreateApprovalRequestApiV2PublicApprovalRequestsPostResponse } from "sanka-sdk/models/operations";

let value: CreateApprovalRequestApiV2PublicApprovalRequestsPostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `result`                                                                                                                                                           | [models.CreateApprovalRequestApiV2PublicApprovalRequestsPost200Envelope](../../models/create-approval-request-api-v2-public-approval-requests-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |