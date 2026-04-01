# BulkOrdersResponse

## Example Usage

```typescript
import { BulkOrdersResponse } from "sanka-sdk/models";

let value: BulkOrdersResponse = {
  ok: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ok`                                                       | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `results`                                                  | [models.BulkOrderResult](../models/bulk-order-result.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `jobId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `ctxId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |