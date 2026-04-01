# BulkOrdersRequest

## Example Usage

```typescript
import { BulkOrdersRequest } from "sanka-sdk/models";

let value: BulkOrdersRequest = {
  orders: [
    {
      externalId: "<id>",
      items: [],
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `orders`                                           | [models.BulkOrderIn](../models/bulk-order-in.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `createMissingItems`                               | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `triggerWorkflows`                                 | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |