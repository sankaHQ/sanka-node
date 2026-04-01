# PublicOrderRequest

## Example Usage

```typescript
import { PublicOrderRequest } from "sanka-sdk/models";

let value: PublicOrderRequest = {
  order: {
    externalId: "<id>",
    items: [],
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `order`                                          | [models.BulkOrderIn](../models/bulk-order-in.md) | :heavy_check_mark:                               | N/A                                              |
| `createMissingItems`                             | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `triggerWorkflows`                               | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |