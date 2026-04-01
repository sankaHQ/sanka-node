# CompaniesListResponse

## Example Usage

```typescript
import { CompaniesListResponse } from "sanka-sdk/models";

let value: CompaniesListResponse = {
  data: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {},
  ],
  page: 139051,
  count: 408747,
  total: 382534,
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