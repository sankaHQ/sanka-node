# UploadPublicExpenseFileApiV2PublicExpensesFilesPostResponse

## Example Usage

```typescript
import { UploadPublicExpenseFileApiV2PublicExpensesFilesPostResponse } from "sanka-sdk/models/operations";

let value: UploadPublicExpenseFileApiV2PublicExpensesFilesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.UploadPublicExpenseFileApiV2PublicExpensesFilesPost200Envelope](../../models/upload-public-expense-file-api-v2-public-expenses-files-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |