# UploadPublicPresentationImageRequest

## Example Usage

```typescript
import { UploadPublicPresentationImageRequest } from "sanka-sdk/models/operations";

let value: UploadPublicPresentationImageRequest = {
  presentationId: "<id>",
  body: {
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `presentationId`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.BodyUploadPublicPresentationImage](../../models/body-upload-public-presentation-image.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |