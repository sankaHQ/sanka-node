# UploadPublicEstimateFileApiV2PublicEstimatesFilesPostResponse

## Example Usage

```typescript
import { UploadPublicEstimateFileApiV2PublicEstimatesFilesPostResponse } from "sanka-sdk/models/operations";

let value: UploadPublicEstimateFileApiV2PublicEstimatesFilesPostResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.UploadPublicEstimateFileApiV2PublicEstimatesFilesPost200Envelope](../../models/upload-public-estimate-file-api-v2-public-estimates-files-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |