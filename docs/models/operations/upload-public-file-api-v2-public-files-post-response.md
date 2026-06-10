# UploadPublicFileApiV2PublicFilesPostResponse

## Example Usage

```typescript
import { UploadPublicFileApiV2PublicFilesPostResponse } from "sanka-sdk/models/operations";

let value: UploadPublicFileApiV2PublicFilesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                         | Record<string, *string*[]>                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `result`                                                                                                                          | [models.UploadPublicFileApiV2PublicFilesPost200Envelope](../../models/upload-public-file-api-v2-public-files-post200-envelope.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |