# DeveloperCloudFleetItemRequest

## Example Usage

```typescript
import { DeveloperCloudFleetItemRequest } from "sanka-sdk/models";

let value: DeveloperCloudFleetItemRequest = {
  key: "<key>",
  repository: "<value>",
  revision: "<value>",
  request: {
    sourceId: "e0ece73f-a706-4078-92e3-9f9556ea441e",
    sourceSha256: "<value>",
    maxCredits: 893054,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `repository`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `revision`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `request`                                                                              | [models.DeveloperCloudCloudRunRequest](../models/developer-cloud-cloud-run-request.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |