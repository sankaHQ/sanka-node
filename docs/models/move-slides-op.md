# MoveSlidesOp

## Example Usage

```typescript
import { MoveSlidesOp } from "sanka-sdk/models";

let value: MoveSlidesOp = {
  op: "move_slides",
  slideIds: [],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `op`                                                      | *"move_slides"*                                           | :heavy_check_mark:                                        | N/A                                                       |
| `slideIds`                                                | *string*[]                                                | :heavy_check_mark:                                        | N/A                                                       |
| `after`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Slide to move after; null moves first; omit to move last. |