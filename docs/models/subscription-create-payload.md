# SubscriptionCreatePayload

## Example Usage

```typescript
import { SubscriptionCreatePayload } from "sanka-sdk/models";

let value: SubscriptionCreatePayload = {
  cid: "<id>",
  items: [],
  subscriptionStatus: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cid`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.SubscriptionItemInput](../models/subscription-item-input.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `subscriptionStatus`                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `currency`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `startDate`                                                            | [Date](../types/rfcdate.md)                                            | :heavy_minus_sign:                                                     | N/A                                                                    |
| `totalPrice`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `frequency`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `frequencyTime`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `tax`                                                                  | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `shippingCostTaxStatus`                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |