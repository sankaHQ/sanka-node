# UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostRequest

## Example Usage

```typescript
import { UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostRequest } from "sanka-sdk/models/operations";

let value: UpsertPublicPayrollProfileApiV2PublicPayrollProfilesPostRequest = {
  body: {
    employeeId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `xWorkspaceCode`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `body`                                                                               | [models.PayrollProfileUpsertRequest](../../models/payroll-profile-upsert-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |