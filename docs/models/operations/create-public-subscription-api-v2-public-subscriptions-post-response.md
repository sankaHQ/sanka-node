# CreatePublicSubscriptionApiV2PublicSubscriptionsPostResponse

## Example Usage

```typescript
import { CreatePublicSubscriptionApiV2PublicSubscriptionsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicSubscriptionApiV2PublicSubscriptionsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.CreatePublicSubscriptionApiV2PublicSubscriptionsPost200Envelope](../../models/create-public-subscription-api-v2-public-subscriptions-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |