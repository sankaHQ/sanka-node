# ListArtifactsResponse

## Example Usage

```typescript
import { ListArtifactsResponse } from "sanka-sdk/models/operations";

let value: ListArtifactsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                        | N/A                                                                                                                                                                                                       |
| `result`                                                                                                                                                                                                  | [models.DeveloperCloudCloudRunArtifactsApiV2MigrateCloudRunsRunIdArtifactsGet200Envelope](../../models/developer-cloud-cloud-run-artifacts-api-v2-migrate-cloud-runs-run-id-artifacts-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                        | N/A                                                                                                                                                                                                       |