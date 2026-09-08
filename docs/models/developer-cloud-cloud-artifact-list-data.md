# DeveloperCloudCloudArtifactListData

## Example Usage

```typescript
import { DeveloperCloudCloudArtifactListData } from "sanka-sdk/models";

let value: DeveloperCloudCloudArtifactListData = {
  artifacts: [
    {
      name: "output.zip",
      sha256: "<value>",
      sizeBytes: 271862,
      expiresAt: new Date("2024-04-04T15:28:35.775Z"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `artifacts`                                                                                  | [models.DeveloperCloudCloudArtifactData](../models/developer-cloud-cloud-artifact-data.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |