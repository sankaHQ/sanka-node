# LineBlock

A straight line or arrow between two stage points (free slides only).

## Example Usage

```typescript
import { LineBlock } from "sanka-sdk/models";

let value: LineBlock = {
  type: "line",
  from: {
    x: 1556.12,
    y: 1011.9,
  },
  to: {
    x: 667.06,
    y: 5264.05,
  },
  stroke: {
    tone: "none",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `type`                               | *"line"*                             | :heavy_check_mark:                   | N/A                                  |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `from`                               | [models.Point](../models/point.md)   | :heavy_check_mark:                   | N/A                                  |
| `to`                                 | [models.Point](../models/point.md)   | :heavy_check_mark:                   | N/A                                  |
| `stroke`                             | [models.Stroke](../models/stroke.md) | :heavy_check_mark:                   | N/A                                  |
| `startArrow`                         | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `endArrow`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |