# GetPublicPresentationExportResponse

## Example Usage

```typescript
import { GetPublicPresentationExportResponse } from "sanka-sdk/models/operations";

let value: GetPublicPresentationExportResponse = {
  headers: {
    "key": [],
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

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [models.GetPublicPresentationExport200Envelope](../../models/get-public-presentation-export200-envelope.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |