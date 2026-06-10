# CreatePublicInvoiceApiV2PublicInvoicesPostResponse

## Example Usage

```typescript
import { CreatePublicInvoiceApiV2PublicInvoicesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicInvoiceApiV2PublicInvoicesPostResponse = {
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.CreatePublicInvoiceApiV2PublicInvoicesPost200Envelope](../../models/create-public-invoice-api-v2-public-invoices-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |