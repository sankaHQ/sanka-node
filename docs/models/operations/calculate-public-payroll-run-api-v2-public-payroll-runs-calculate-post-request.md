# CalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePostRequest

## Example Usage

```typescript
import { CalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePostRequest } from "sanka-sdk/models/operations";

let value: CalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePostRequest =
  {
    body: {
      period: "<value>",
    },
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.PayrollRunCalculateRequest](../../models/payroll-run-calculate-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |