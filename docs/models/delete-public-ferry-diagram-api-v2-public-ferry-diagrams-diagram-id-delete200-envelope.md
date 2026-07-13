# DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete200Envelope

## Example Usage

```typescript
import { DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete200Envelope } from "sanka-sdk/models";

let value:
  DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete200Envelope = {
    success: true,
    data: {
      id: "<id>",
      deleted: false,
    },
    meta: {
      ctxId: "<id>",
    },
  };
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `success`                                                               | *true*                                                                  | :heavy_check_mark:                                                      | N/A                                                                     |
| `data`                                                                  | [models.FerryDiagramDeleteData](../models/ferry-diagram-delete-data.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `meta`                                                                  | [models.EnvelopeMeta](../models/envelope-meta.md)                       | :heavy_check_mark:                                                      | N/A                                                                     |