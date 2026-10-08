# ReplaceSlideOp

## Example Usage

```typescript
import { ReplaceSlideOp } from "sanka-sdk/models";

let value: ReplaceSlideOp = {
  op: "replace_slide",
  slideId: "<id>",
  slide: {},
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `op`                  | *"replace_slide"*     | :heavy_check_mark:    | N/A                   |
| `slideId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `slide`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |