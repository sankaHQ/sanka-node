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
      body: {
        "key": "<value>",
        "key1": "<value>",
      },
    };
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `runId`               | *string*              | :heavy_check_mark:    | N/A                   |
| `workspaceId`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `xWorkspaceCode`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `body`                | Record<string, *any*> | :heavy_check_mark:    | N/A                   |