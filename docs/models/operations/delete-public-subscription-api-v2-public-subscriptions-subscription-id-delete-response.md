# DeletePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdDeleteResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |
| `result`                                                                                                                                                                                            | [models.DeletePublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdDelete200Envelope](../../models/delete-public-subscription-api-v2-public-subscriptions-subscription-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |