# PayrollProfileUpsertRequest

## Example Usage

```typescript
import { PayrollProfileUpsertRequest } from "sanka-sdk/models";

let value: PayrollProfileUpsertRequest = {
  employeeId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `employeeId`                    | *string*                        | :heavy_check_mark:              | N/A                             |
| `jurisdictionCountryCode`       | *string*                        | :heavy_minus_sign:              | N/A                             |
| `payType`                       | *string*                        | :heavy_minus_sign:              | N/A                             |
| `baseSalary`                    | *number*                        | :heavy_minus_sign:              | N/A                             |
| `hourlyRate`                    | *number*                        | :heavy_minus_sign:              | N/A                             |
| `scheduledMonthlyHours`         | *number*                        | :heavy_minus_sign:              | N/A                             |
| `taxTableType`                  | *string*                        | :heavy_minus_sign:              | N/A                             |
| `dependentCount`                | *number*                        | :heavy_minus_sign:              | N/A                             |
| `residentTaxMonthlyAmount`      | *number*                        | :heavy_minus_sign:              | N/A                             |
| `standardMonthlyRemuneration`   | *number*                        | :heavy_minus_sign:              | N/A                             |
| `healthInsurancePrefectureCode` | *string*                        | :heavy_minus_sign:              | N/A                             |
| `isHealthInsuranceEnrolled`     | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `isCareInsuranceEnrolled`       | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `isPensionEnrolled`             | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `isEmploymentInsuranceEnrolled` | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `effectiveFrom`                 | [Date](../types/rfcdate.md)     | :heavy_minus_sign:              | N/A                             |
| `effectiveTo`                   | [Date](../types/rfcdate.md)     | :heavy_minus_sign:              | N/A                             |
| `extraSettings`                 | Record<string, *any*>           | :heavy_minus_sign:              | N/A                             |