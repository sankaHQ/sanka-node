# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "sanka-sdk/models";

let value: OrdersListResponse = {
  data: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
    },
    {},
  ],
  page: 480247,
  count: 635381,
  total: 714409,
  message: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `data`                  | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
| `page`                  | *number*                | :heavy_check_mark:      | N/A                     |
| `count`                 | *number*                | :heavy_check_mark:      | N/A                     |
| `total`                 | *number*                | :heavy_check_mark:      | N/A                     |
| `message`               | *string*                | :heavy_check_mark:      | N/A                     |
| `ctxId`                 | *string*                | :heavy_minus_sign:      | N/A                     |