# DeveloperCloudUploadCloudSourceApiV2MigrateCloudSourcesPost201Envelope

## Example Usage

```typescript
import { DeveloperCloudUploadCloudSourceApiV2MigrateCloudSourcesPost201Envelope } from "sanka-sdk/models";

let value:
  DeveloperCloudUploadCloudSourceApiV2MigrateCloudSourcesPost201Envelope = {
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
  };
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *true*                                                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.DeveloperCloudCloudSourceData](../models/developer-cloud-cloud-source-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `meta`                                                                                 | [models.EnvelopeMeta](../models/envelope-meta.md)                                      | :heavy_check_mark:                                                                     | N/A                                                                                    |