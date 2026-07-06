# StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPostResponse

## Example Usage

```typescript
import {
  StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPostResponse,
} from "sanka-sdk/models/operations";

let value:
  StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
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

| Field                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                       |
| `result`                                                                                                                                                                                                                  | [models.StartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost200Envelope](../../models/start-public-moneyforward-invoice-export-api-v2-public-invoices-exports-moneyforward-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                       |