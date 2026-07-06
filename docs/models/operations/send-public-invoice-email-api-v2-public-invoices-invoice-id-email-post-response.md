# SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostResponse

## Example Usage

```typescript
import { SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostResponse } from "sanka-sdk/models/operations";

let value: SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostResponse =
  {
    headers: {},
    result: {
      success: true,
      data: {
        invoiceId: "<id>",
        action: "draft",
        status: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `result`                                                                                                                                                                            | [models.SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost200Envelope](../../models/send-public-invoice-email-api-v2-public-invoices-invoice-id-email-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |