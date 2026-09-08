# DeveloperCloudCloudRunArtifactsApiV2MigrateCloudRunsRunIdArtifactsGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudCloudRunArtifactsApiV2MigrateCloudRunsRunIdArtifactsGet200Envelope } from "sanka-sdk/models";

let value:
  DeveloperCloudCloudRunArtifactsApiV2MigrateCloudRunsRunIdArtifactsGet200Envelope =
    {
      success: true,
      data: {
        artifacts: [
          {
            name: "output.zip",
            sha256: "<value>",
            sizeBytes: 271862,
            expiresAt: new Date("2024-04-04T15:28:35.775Z"),
          },
        ],
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `success`                                                                                           | *true*                                                                                              | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `data`                                                                                              | [models.DeveloperCloudCloudArtifactListData](../models/developer-cloud-cloud-artifact-list-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `meta`                                                                                              | [models.EnvelopeMeta](../models/envelope-meta.md)                                                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |