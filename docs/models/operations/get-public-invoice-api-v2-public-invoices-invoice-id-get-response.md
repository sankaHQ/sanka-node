# GetPublicInvoiceApiV2PublicInvoicesInvoiceIdGetResponse

## Example Usage

```typescript
import { GetPublicInvoiceApiV2PublicInvoicesInvoiceIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicInvoiceApiV2PublicInvoicesInvoiceIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.GetPublicInvoiceApiV2PublicInvoicesInvoiceIdGet200Envelope](../../models/get-public-invoice-api-v2-public-invoices-invoice-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |