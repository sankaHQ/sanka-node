# PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPostResponse

## Example Usage

```typescript
import {
  PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPostResponse,
} from "sanka-sdk/models/operations";

let value:
  PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
        ],
        "key1": [
          "<value 1>",
        ],
        "key2": [
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

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                         | [models.PreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost200Envelope](../../models/preview-public-freee-invoice-export-api-v2-public-invoices-exports-freee-preview-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |