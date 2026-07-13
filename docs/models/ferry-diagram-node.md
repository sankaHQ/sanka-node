# FerryDiagramNode

## Example Usage

```typescript
import { FerryDiagramNode } from "sanka-sdk/models";

let value: FerryDiagramNode = {
  id: "<id>",
  type: "process",
  position: {
    x: 8820.33,
    y: 6709.02,
  },
  data: {
    label: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `type`                                                              | [models.FerryDiagramNodeType](../models/ferry-diagram-node-type.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `position`                                                          | [models.FerryDiagramPosition](../models/ferry-diagram-position.md)  | :heavy_check_mark:                                                  | N/A                                                                 |
| `data`                                                              | [models.FerryDiagramNodeData](../models/ferry-diagram-node-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |