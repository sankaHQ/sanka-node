# ContactsListResponse

## Example Usage

```typescript
import { ContactsListResponse } from "sanka-sdk/models";

let value: ContactsListResponse = {
  data: [
    {
      "key": "<value>",
    },
    {},
    {
      "key": "<value>",
    },
  ],
  page: 550858,
  count: 121631,
  total: 247826,
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
| `permission`            | *string*                | :heavy_minus_sign:      | N/A                     |
| `message`               | *string*                | :heavy_check_mark:      | N/A                     |
| `ctxId`                 | *string*                | :heavy_minus_sign:      | N/A                     |