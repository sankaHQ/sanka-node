# PreviewPublicProgramPresentationRequest

## Example Usage

```typescript
import { PreviewPublicProgramPresentationRequest } from "sanka-sdk/models/operations";

let value: PreviewPublicProgramPresentationRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `programId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `presentationId`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `xWorkspaceCode`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.PresentationPreviewRequest](../../models/presentation-preview-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |