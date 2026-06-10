# RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPostResponse

## Example Usage

```typescript
import { RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPostResponse } from "sanka-sdk/models/operations";

let value:
  RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPostResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
        "key2": [
          "<value 1>",
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |
| `result`                                                                                                                                                                                            | [models.RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost200Envelope](../../models/reject-approval-request-api-v2-public-approval-requests-history-id-reject-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |