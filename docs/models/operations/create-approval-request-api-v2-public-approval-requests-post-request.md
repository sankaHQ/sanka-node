# CreateApprovalRequestApiV2PublicApprovalRequestsPostRequest

## Example Usage

```typescript
import { CreateApprovalRequestApiV2PublicApprovalRequestsPostRequest } from "sanka-sdk/models/operations";

let value: CreateApprovalRequestApiV2PublicApprovalRequestsPostRequest = {
  body: {
    objectType: "<value>",
    recordId: "<id>",
    approverUserIds: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `xWorkspaceCode`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `body`                                                                                 | [models.ApprovalRequestCreateRequest](../../models/approval-request-create-request.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |