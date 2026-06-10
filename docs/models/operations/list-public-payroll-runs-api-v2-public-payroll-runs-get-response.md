# ListPublicPayrollRunsApiV2PublicPayrollRunsGetResponse

## Example Usage

```typescript
import { ListPublicPayrollRunsApiV2PublicPayrollRunsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicPayrollRunsApiV2PublicPayrollRunsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                               | Record<string, *string*[]>                                                                                                                              | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `result`                                                                                                                                                | [models.ListPublicPayrollRunsApiV2PublicPayrollRunsGet200Envelope](../../models/list-public-payroll-runs-api-v2-public-payroll-runs-get200-envelope.md) | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |