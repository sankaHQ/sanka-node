# FerryDiagramListData

## Example Usage

```typescript
import { FerryDiagramListData } from "sanka-sdk/models";

let value: FerryDiagramListData = {
  diagrams: [
    {
      id: "<id>",
      name: "<value>",
      revision: 623922,
    },
  ],
  count: 421911,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `diagrams`                                                         | [models.FerryDiagramSummary](../models/ferry-diagram-summary.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `count`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |