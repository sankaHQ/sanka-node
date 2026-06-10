# IncentivePlanCreateRequest

## Example Usage

```typescript
import { IncentivePlanCreateRequest } from "sanka-sdk/models";

let value: IncentivePlanCreateRequest = {
  name: "<value>",
  baseEvent: "<value>",
  rateType: "<value>",
  rateValue: 5053.45,
  effectiveFrom: new Date("2025-05-06"),
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `name`                      | *string*                    | :heavy_check_mark:          | N/A                         |
| `baseEvent`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `rateType`                  | *string*                    | :heavy_check_mark:          | N/A                         |
| `rateValue`                 | *number*                    | :heavy_check_mark:          | N/A                         |
| `effectiveFrom`             | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |
| `effectiveTo`               | [Date](../types/rfcdate.md) | :heavy_minus_sign:          | N/A                         |
| `status`                    | *string*                    | :heavy_minus_sign:          | N/A                         |
| `sourceStatus`              | *string*                    | :heavy_minus_sign:          | N/A                         |
| `sourceCompanyId`           | *string*                    | :heavy_minus_sign:          | N/A                         |
| `payeeType`                 | *string*                    | :heavy_minus_sign:          | N/A                         |
| `payeeCompanyId`            | *string*                    | :heavy_minus_sign:          | N/A                         |
| `amountBasis`               | *string*                    | :heavy_minus_sign:          | N/A                         |
| `minAmount`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `maxPayoutAmount`           | *number*                    | :heavy_minus_sign:          | N/A                         |