# SankaDiagramBlock

A saved Sanka diagram. Every view shows its latest revision as an image, so edits to
the diagram appear in the deck, its slideshow, share links and new exports.

## Example Usage

```typescript
import { SankaDiagramBlock } from "sanka-sdk/models";

let value: SankaDiagramBlock = {
  type: "sankaDiagram",
  diagramId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | *"sankaDiagram"*                                                    | :heavy_check_mark:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `diagramId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | ID of a Sanka diagram in the same workspace.                        |
| `alt`                                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `caption`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `fit`                                                               | [models.SankaDiagramBlockFit](../models/sanka-diagram-block-fit.md) | :heavy_minus_sign:                                                  | How the image fills its box; `contain` (the default) or `cover`.    |
| `frame`                                                             | [models.Frame](../models/frame.md)                                  | :heavy_minus_sign:                                                  | N/A                                                                 |