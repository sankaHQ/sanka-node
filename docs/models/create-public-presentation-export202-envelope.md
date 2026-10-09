# CreatePublicPresentationExport202Envelope

## Example Usage

```typescript
import { CreatePublicPresentationExport202Envelope } from "sanka-sdk/models";

let value: CreatePublicPresentationExport202Envelope = {
  success: true,
  data: {
    id: "<id>",
    documentId: "<id>",
    product: "sanka",
    revision: 919055,
    format: "pdf",
    status: "uploading",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *true*                                                                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [models.PresentationExportData](../models/presentation-export-data.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `meta`                                                                 | [models.EnvelopeMeta](../models/envelope-meta.md)                      | :heavy_check_mark:                                                     | N/A                                                                    |