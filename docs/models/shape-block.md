# ShapeBlock

A filled theme-colored shape with optional text (free slides only).

## Example Usage

```typescript
import { ShapeBlock } from "sanka-sdk/models";

let value: ShapeBlock = {
  type: "shape",
  shapeBlockShape: "triangle",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"shape"*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `shapeBlockShape`                                              | [models.ShapeBlockShape](../models/shape-block-shape.md)       | :heavy_check_mark:                                             | N/A                                                            |
| `fill`                                                         | [models.Fill](../models/fill.md)                               | :heavy_minus_sign:                                             | Theme tone; defaults to accent-soft.                           |
| `stroke`                                                       | [models.Stroke](../models/stroke.md)                           | :heavy_minus_sign:                                             | N/A                                                            |
| `text`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Slide Markdown (block subset).                                 |
| `textAlign`                                                    | [models.TextAlign](../models/text-align.md)                    | :heavy_minus_sign:                                             | Defaults to center.                                            |
| `fontSize`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Main text size in stage px (free slides only); 1 px = 0.75 pt. |
| `frame`                                                        | [models.Frame](../models/frame.md)                             | :heavy_minus_sign:                                             | N/A                                                            |