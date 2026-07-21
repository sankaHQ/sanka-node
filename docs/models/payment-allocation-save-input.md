# PaymentAllocationSaveInput

## Example Usage

```typescript
import { PaymentAllocationSaveInput } from "sanka-sdk/models";

let value: PaymentAllocationSaveInput = {
  invoiceId: "<id>",
  amount: 8807.76,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `adjustmentAmount` | *number*           | :heavy_minus_sign: | N/A                |
| `adjustmentType`   | *string*           | :heavy_minus_sign: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
| `source`           | *string*           | :heavy_minus_sign: | N/A                |
| `notes`            | *string*           | :heavy_minus_sign: | N/A                |