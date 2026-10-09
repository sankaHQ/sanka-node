# CancelPublicProgramPresentationExportResponse

## Example Usage

```typescript
import { CancelPublicProgramPresentationExportResponse } from "sanka-sdk/models/operations";

let value: CancelPublicProgramPresentationExportResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                        | Record<string, *string*[]>                                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `result`                                                                                                                         | [models.CancelPublicProgramPresentationExport200Envelope](../../models/cancel-public-program-presentation-export200-envelope.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |