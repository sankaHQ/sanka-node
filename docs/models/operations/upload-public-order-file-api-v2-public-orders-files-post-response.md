# UploadPublicOrderFileApiV2PublicOrdersFilesPostResponse

## Example Usage

```typescript
import { UploadPublicOrderFileApiV2PublicOrdersFilesPostResponse } from "sanka-sdk/models/operations";

let value: UploadPublicOrderFileApiV2PublicOrdersFilesPostResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.UploadPublicOrderFileApiV2PublicOrdersFilesPost200Envelope](../../models/upload-public-order-file-api-v2-public-orders-files-post200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |