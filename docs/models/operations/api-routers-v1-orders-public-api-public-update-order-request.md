# ApiRoutersV1OrdersPublicApiPublicUpdateOrderRequest

## Example Usage

```typescript
import { ApiRoutersV1OrdersPublicApiPublicUpdateOrderRequest } from "sanka-sdk/models/operations";

let value: ApiRoutersV1OrdersPublicApiPublicUpdateOrderRequest = {
  orderId: "<id>",
  body: {
    order: {
      externalId: "<id>",
      items: [],
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `orderId`                                                         | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `body`                                                            | [models.PublicOrderRequest](../../models/public-order-request.md) | :heavy_check_mark:                                                | N/A                                                               |