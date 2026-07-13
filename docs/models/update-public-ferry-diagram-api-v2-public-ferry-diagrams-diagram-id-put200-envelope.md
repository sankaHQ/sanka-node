# UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut200Envelope

## Example Usage

```typescript
import { UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut200Envelope } from "sanka-sdk/models";

let value:
  UpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut200Envelope = {
    success: true,
    data: {
      name: "<value>",
      id: "<id>",
      workspaceId: "<id>",
      revision: 798517,
    },
    meta: {
      ctxId: "<id>",
    },
  };
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.FerryDiagramData](../models/ferry-diagram-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |