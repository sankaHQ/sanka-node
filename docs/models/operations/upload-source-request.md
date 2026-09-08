# UploadSourceRequest

## Example Usage

```typescript
import { UploadSourceRequest } from "sanka-sdk/models/operations";

let value: UploadSourceRequest = {
  body: {
    archiveBase64: "<value>",
    sha256: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.DeveloperCloudSourceUploadRequest](../../models/developer-cloud-source-upload-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |