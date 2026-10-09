# PreviewPublicPresentation200Envelope

## Example Usage

```typescript
import { PreviewPublicPresentation200Envelope } from "sanka-sdk/models";

let value: PreviewPublicPresentation200Envelope = {
  success: true,
  data: {
    revision: 1222,
    slides: [
      {
        slideId: "<id>",
        index: 937191,
        image: {
          contentType: "<value>",
          base64: "<value>",
        },
        fit: {},
      },
    ],
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *true*                                                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PresentationPreviewData](../models/presentation-preview-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `meta`                                                                   | [models.EnvelopeMeta](../models/envelope-meta.md)                        | :heavy_check_mark:                                                       | N/A                                                                      |