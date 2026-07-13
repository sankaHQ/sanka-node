# ListPublicFerryDiagramsApiV2PublicFerryDiagramsGet200Envelope

## Example Usage

```typescript
import { ListPublicFerryDiagramsApiV2PublicFerryDiagramsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicFerryDiagramsApiV2PublicFerryDiagramsGet200Envelope = {
  success: true,
  data: {
    diagrams: [
      {
        id: "<id>",
        name: "<value>",
        revision: 623922,
      },
    ],
    count: 489186,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `success`                                                           | *true*                                                              | :heavy_check_mark:                                                  | N/A                                                                 |
| `data`                                                              | [models.FerryDiagramListData](../models/ferry-diagram-list-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `meta`                                                              | [models.EnvelopeMeta](../models/envelope-meta.md)                   | :heavy_check_mark:                                                  | N/A                                                                 |