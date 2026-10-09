# MoveBlockOp

## Example Usage

```typescript
import { MoveBlockOp } from "sanka-sdk/models";

let value: MoveBlockOp = {
  op: "move_block",
  blockId: "<id>",
  toSlideId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `op`                                                      | *"move_block"*                                            | :heavy_check_mark:                                        | N/A                                                       |
| `blockId`                                                 | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `toSlideId`                                               | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `parent`                                                  | [models.BlockParent](../models/block-parent.md)           | :heavy_minus_sign:                                        | Move into this column instead of the slide's top level.   |
| `after`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Block to move after; null moves first; omit to move last. |