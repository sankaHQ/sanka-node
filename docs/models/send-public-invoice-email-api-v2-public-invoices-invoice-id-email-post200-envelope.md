# SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost200Envelope

## Example Usage

```typescript
import { SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost200Envelope } from "sanka-sdk/models";

let value:
  SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost200Envelope = {
    success: true,
    data: {
      invoiceId: "<id>",
      action: "draft",
      status: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  };
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `success`                                                               | *true*                                                                  | :heavy_check_mark:                                                      | N/A                                                                     |
| `data`                                                                  | [models.PublicInvoiceEmailData](../models/public-invoice-email-data.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `meta`                                                                  | [models.EnvelopeMeta](../models/envelope-meta.md)                       | :heavy_check_mark:                                                      | N/A                                                                     |