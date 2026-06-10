# UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutRequest

## Example Usage

```typescript
import { UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutRequest = {
    subscriptionId: "<id>",
    body: {},
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `subscriptionId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |