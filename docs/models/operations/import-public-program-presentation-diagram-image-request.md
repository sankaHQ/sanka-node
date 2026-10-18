# ImportPublicProgramPresentationDiagramImageRequest

## Example Usage

```typescript
import { ImportPublicProgramPresentationDiagramImageRequest } from "sanka-sdk/models/operations";

let value: ImportPublicProgramPresentationDiagramImageRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    diagramId: "<id>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `programId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `presentationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `workspaceId`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `xWorkspaceCode`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `body`                                                                                       | [models.PresentationDiagramImageRequest](../../models/presentation-diagram-image-request.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |