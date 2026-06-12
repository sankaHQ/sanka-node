# ActivityLogPagination

## Example Usage

```typescript
import { ActivityLogPagination } from "sanka-sdk/models";

let value: ActivityLogPagination = {
  page: 708291,
  limit: 444902,
  hasNext: true,
  total: 65452,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `page`             | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `hasNext`          | *boolean*          | :heavy_check_mark: | N/A                |
| `nextPage`         | *number*           | :heavy_minus_sign: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |