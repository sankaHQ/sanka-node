# GetPublicProgramPresentationExportResponse

## Example Usage

```typescript
import { GetPublicProgramPresentationExportResponse } from "sanka-sdk/models/operations";

let value: GetPublicProgramPresentationExportResponse = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                  | Record<string, *string*[]>                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `result`                                                                                                                   | [models.GetPublicProgramPresentationExport200Envelope](../../models/get-public-program-presentation-export200-envelope.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |