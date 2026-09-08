# UploadSourceResponse

## Example Usage

```typescript
import { UploadSourceResponse } from "sanka-sdk/models/operations";

let value: UploadSourceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
    data: {
      id: "333bf730-3e7a-4ed4-b8ff-99f934fead66",
      sha256: "<value>",
      sizeBytes: 614345,
      expandedBytes: 251423,
      fileCount: 527671,
      expiresAt: new Date("2024-11-29T16:28:01.148Z"),
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `result`                                                                                                                                                                           | [models.DeveloperCloudUploadCloudSourceApiV2MigrateCloudSourcesPost201Envelope](../../models/developer-cloud-upload-cloud-source-api-v2-migrate-cloud-sources-post201-envelope.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |