# BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePostResponse

## Example Usage

```typescript
import { BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePostResponse } from "sanka-sdk/models/operations";

let value: BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePostResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      operation: "edit",
      objectType: "<value>",
      count: 0,
      failedCount: 0,
      queued: false,
      message: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | *operations.BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePostResponseResult* | :heavy_check_mark:                                                                   | N/A                                                                                  |