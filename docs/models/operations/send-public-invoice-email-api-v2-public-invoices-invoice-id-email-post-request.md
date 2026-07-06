# SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostRequest

## Example Usage

```typescript
import { SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostRequest } from "sanka-sdk/models/operations";

let value: SendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPostRequest =
  {
    invoiceId: "<id>",
    body: {},
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `invoiceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `lang`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `language`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `acceptLanguage`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.PublicInvoiceEmailRequest](../../models/public-invoice-email-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |