# FerryDiagramUpdateRequest

## Example Usage

```typescript
import { FerryDiagramUpdateRequest } from "sanka-sdk/models";

let value: FerryDiagramUpdateRequest = {
  name: "<value>",
  revision: 462923,
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
| `revision`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |