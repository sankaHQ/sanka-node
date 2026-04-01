# PublicInventoryResponse

## Example Usage

```typescript
import { PublicInventoryResponse } from "sanka-sdk/models";

let value: PublicInventoryResponse = {
  ok: false,
  status: "<value>",
  externalId: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `ok`                | *boolean*           | :heavy_check_mark:  | N/A                 |
| `status`            | *string*            | :heavy_check_mark:  | N/A                 |
| `externalId`        | *string*            | :heavy_check_mark:  | N/A                 |
| `inventoryId`       | *string*            | :heavy_minus_sign:  | N/A                 |
| `inventoryRecordId` | *string*            | :heavy_minus_sign:  | N/A                 |
| `ctxId`             | *string*            | :heavy_minus_sign:  | N/A                 |