# ImportPublicProgramPresentationImageRequest

## Example Usage

```typescript
import { ImportPublicProgramPresentationImageRequest } from "sanka-sdk/models/operations";

let value: ImportPublicProgramPresentationImageRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    url: "https://alert-puppet.name",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `programId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `presentationId`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `workspaceId`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `xWorkspaceCode`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `body`                                                                                     | [models.PresentationImageImportRequest](../../models/presentation-image-import-request.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |