# CancelPublicPresentationExportResponse

## Example Usage

```typescript
import { CancelPublicPresentationExportResponse } from "sanka-sdk/models/operations";

let value: CancelPublicPresentationExportResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [models.CancelPublicPresentationExport200Envelope](../../models/cancel-public-presentation-export200-envelope.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |