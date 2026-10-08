# UploadPublicProgramPresentationImageRequest

## Example Usage

```typescript
import { UploadPublicProgramPresentationImageRequest } from "sanka-sdk/models/operations";

let value: UploadPublicProgramPresentationImageRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `programId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `presentationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `workspaceId`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `xWorkspaceCode`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `body`                                                                                                           | [models.BodyUploadPublicProgramPresentationImage](../../models/body-upload-public-program-presentation-image.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |