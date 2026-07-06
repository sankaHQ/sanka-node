# PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPostResponse

## Example Usage

```typescript
import {
  PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPostResponse,
} from "sanka-sdk/models/operations";

let value:
  PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
        ],
        "key1": [
          "<value 1>",
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

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |
| `result`                                                                                                                                                                                                             | [models.PreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost200Envelope](../../models/preview-public-hubspot-invoice-draft-api-v2-public-invoices-drafts-hubspot-preview-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |