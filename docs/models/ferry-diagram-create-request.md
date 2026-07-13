# FerryDiagramCreateRequest

## Example Usage

```typescript
import { FerryDiagramCreateRequest } from "sanka-sdk/models";

let value: FerryDiagramCreateRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `nodes`                                                            | [models.FerryDiagramNode](../models/ferry-diagram-node.md)[]       | :heavy_minus_sign:                                                 | N/A                                                                |
| `edges`                                                            | [models.FerryDiagramEdge](../models/ferry-diagram-edge.md)[]       | :heavy_minus_sign:                                                 | N/A                                                                |
| `viewport`                                                         | [models.FerryDiagramViewport](../models/ferry-diagram-viewport.md) | :heavy_minus_sign:                                                 | N/A                                                                |