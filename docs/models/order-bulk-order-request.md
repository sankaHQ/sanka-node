# OrderBulkOrderRequest

## Example Usage

```typescript
import { OrderBulkOrderRequest } from "sanka-sdk/models";

let value: OrderBulkOrderRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.OrderLineItemMutationRequest](../models/order-line-item-mutation-request.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.OrderLineItemMutationRequest](../models/order-line-item-mutation-request.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `companyExternalId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deliveryStatus`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orderAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |