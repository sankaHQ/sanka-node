# UpdatePublicInvoiceApiV2PublicInvoicesInvoiceIdPutResponse

## Example Usage

```typescript
import { UpdatePublicInvoiceApiV2PublicInvoicesInvoiceIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicInvoiceApiV2PublicInvoicesInvoiceIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
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

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.UpdatePublicInvoiceApiV2PublicInvoicesInvoiceIdPut200Envelope](../../models/update-public-invoice-api-v2-public-invoices-invoice-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |