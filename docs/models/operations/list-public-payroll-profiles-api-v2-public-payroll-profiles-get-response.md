# ListPublicPayrollProfilesApiV2PublicPayrollProfilesGetResponse

## Example Usage

```typescript
import { ListPublicPayrollProfilesApiV2PublicPayrollProfilesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicPayrollProfilesApiV2PublicPayrollProfilesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `result`                                                                                                                                                                | [models.ListPublicPayrollProfilesApiV2PublicPayrollProfilesGet200Envelope](../../models/list-public-payroll-profiles-api-v2-public-payroll-profiles-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |