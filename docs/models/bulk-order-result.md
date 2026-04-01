# BulkOrderResult

## Example Usage

```typescript
import { BulkOrderResult } from "sanka-sdk/models";

let value: BulkOrderResult = {
  externalId: "<id>",
  status: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `externalId`       | *string*           | :heavy_check_mark: | N/A                |
| `status`           | *string*           | :heavy_check_mark: | N/A                |
| `orderId`          | *string*           | :heavy_minus_sign: | N/A                |
| `errors`           | *string*[]         | :heavy_minus_sign: | N/A                |