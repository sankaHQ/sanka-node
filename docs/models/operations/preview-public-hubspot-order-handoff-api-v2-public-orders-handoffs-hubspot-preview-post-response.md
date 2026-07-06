# PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPostResponse

## Example Usage

```typescript
import {
  PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPostResponse,
} from "sanka-sdk/models/operations";

let value:
  PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPostResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
        ],
        "key2": [
          "<value 1>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
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
| `result`                                                                                                                                                                                                             | [models.PreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost200Envelope](../../models/preview-public-hubspot-order-handoff-api-v2-public-orders-handoffs-hubspot-preview-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |