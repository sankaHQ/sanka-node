# CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostResponse

## Example Usage

```typescript
import {
  CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostResponse,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
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

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |
| `result`                                                                                                                                                                                                             | [models.CreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost200Envelope](../../models/create-public-payroll-journal-entry-api-v2-public-payroll-runs-run-id-journal-entry-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |