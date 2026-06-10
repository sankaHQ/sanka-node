# ListApprovalRequestsApiV2PublicApprovalRequestsGetResponse

## Example Usage

```typescript
import { ListApprovalRequestsApiV2PublicApprovalRequestsGetResponse } from "sanka-sdk/models/operations";

let value: ListApprovalRequestsApiV2PublicApprovalRequestsGetResponse = {
  headers: {
    "key": [
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

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                     | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `result`                                                                                                                                                       | [models.ListApprovalRequestsApiV2PublicApprovalRequestsGet200Envelope](../../models/list-approval-requests-api-v2-public-approval-requests-get200-envelope.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |