# UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutResponse

## Example Usage

```typescript
import { UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutResponse } from "sanka-sdk/models/operations";

let value:
  UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPutResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key1": [],
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

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |
| `result`                                                                                                                                                                                      | [models.UpdatePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdPut200Envelope](../../models/update-public-subscription-api-v2-public-subscriptions-subscription-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |