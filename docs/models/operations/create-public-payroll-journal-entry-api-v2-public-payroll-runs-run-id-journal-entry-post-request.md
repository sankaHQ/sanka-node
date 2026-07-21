# CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostRequest

## Example Usage

```typescript
import {
  CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostRequest,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostRequest =
    {
      runId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `runId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.PayrollJournalEntryRequest](../../models/payroll-journal-entry-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |