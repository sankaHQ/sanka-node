# PreviewPublicPresentationRequest

## Example Usage

```typescript
import { PreviewPublicPresentationRequest } from "sanka-sdk/models/operations";

let value: PreviewPublicPresentationRequest = {
  presentationId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `presentationId`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `xWorkspaceCode`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.PresentationPreviewRequest](../../models/presentation-preview-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |