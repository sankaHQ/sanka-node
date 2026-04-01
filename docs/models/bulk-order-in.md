# BulkOrderIn

## Example Usage

```typescript
import { BulkOrderIn } from "sanka-sdk/models";

let value: BulkOrderIn = {
  externalId: "<id>",
  items: [
    {},
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `externalId`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `companyId`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `companyExternalId`                                         | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `orderAt`                                                   | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `deliveryStatus`                                            | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `items`                                                     | [models.BulkOrderItemIn](../models/bulk-order-item-in.md)[] | :heavy_check_mark:                                          | N/A                                                         |