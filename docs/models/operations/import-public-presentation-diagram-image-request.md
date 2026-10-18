# ImportPublicPresentationDiagramImageRequest

## Example Usage

```typescript
import { ImportPublicPresentationDiagramImageRequest } from "sanka-sdk/models/operations";

let value: ImportPublicPresentationDiagramImageRequest = {
  presentationId: "<id>",
  body: {
    diagramId: "<id>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `presentationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `workspaceId`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `xWorkspaceCode`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `body`                                                                                       | [models.PresentationDiagramImageRequest](../../models/presentation-diagram-image-request.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |