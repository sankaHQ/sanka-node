# GetPublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdGetResponse

## Example Usage

```typescript
import { GetPublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdGetResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
    },
    result: {
      success: true,
      data: {
        id: "<id>",
        recordId: "<id>",
        objectType: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `result`                                                                                                                                                                                | [models.GetPublicSubscriptionApiV2PublicSubscriptionsSubscriptionIdGet200Envelope](../../models/get-public-subscription-api-v2-public-subscriptions-subscription-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |