# UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPutRequest

## Example Usage

```typescript
import { UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPutRequest =
  {
    diagramId: "<id>",
    body: {
      name: "<value>",
      revision: 334967,
    },
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `diagramId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.FerryDiagramUpdateRequest](../../models/ferry-diagram-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |