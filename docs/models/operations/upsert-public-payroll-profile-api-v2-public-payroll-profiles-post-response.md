# UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostResponse

## Example Usage

```typescript
import { UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostResponse } from "sanka-sdk/models/operations";

let value: UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `result`                                                                                                                                                                    | [models.UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPost200Envelope](../../models/upsert-public-payroll-profile-api-v2-public-payroll-profiles-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |