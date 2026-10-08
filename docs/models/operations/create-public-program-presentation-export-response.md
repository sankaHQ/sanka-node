# CreatePublicProgramPresentationExportResponse

## Example Usage

```typescript
import { CreatePublicProgramPresentationExportResponse } from "sanka-sdk/models/operations";

let value: CreatePublicProgramPresentationExportResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
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
| `result`                                                                                                                         | [models.CreatePublicProgramPresentationExport202Envelope](../../models/create-public-program-presentation-export202-envelope.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |