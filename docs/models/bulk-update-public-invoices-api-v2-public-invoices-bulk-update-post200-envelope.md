# BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost200Envelope

## Example Usage

```typescript
import { BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost200Envelope } from "sanka-sdk/models";

let value:
  BulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost200Envelope = {
    success: true,
    data: {
      operation: "edit",
      objectType: "<value>",
      message: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *true*                                                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ObjectRecordBulkActionData](../models/object-record-bulk-action-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `meta`                                                                           | [models.EnvelopeMeta](../models/envelope-meta.md)                                | :heavy_check_mark:                                                               | N/A                                                                              |