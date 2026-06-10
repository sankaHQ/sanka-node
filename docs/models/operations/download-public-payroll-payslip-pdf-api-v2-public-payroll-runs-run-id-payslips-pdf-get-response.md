# DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGetResponse

## Example Usage

```typescript
import { DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGetResponse } from "sanka-sdk/models/operations";

let value:
  DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGetResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
        success: true,
        data: "<value>",
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                         | [models.DownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet200Envelope](../../models/download-public-payroll-payslip-pdf-api-v2-public-payroll-runs-run-id-payslips-pdf-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |