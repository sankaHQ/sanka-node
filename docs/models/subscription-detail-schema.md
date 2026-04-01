# SubscriptionDetailSchema

## Example Usage

```typescript
import { SubscriptionDetailSchema } from "sanka-sdk/models";

let value: SubscriptionDetailSchema = {
  id: "<id>",
  createdAt: new Date("2024-11-29T08:23:54.808Z"),
  contactInfo: [],
  items: [
    {
      id: "<id>",
      amount: 955947,
    },
  ],
  numberItem: 296265,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subscriptionStatus`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contactInfo`                                                                                 | [models.SubscriptionContactSchema](../models/subscription-contact-schema.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.SubscriptionItemSchema](../models/subscription-item-schema.md)[]                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numberItem`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](../types/rfcdate.md)                                                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `totalPrice`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priorToTime`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `frequency`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `frequencyTime`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tax`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `shippingCostTaxStatus`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |