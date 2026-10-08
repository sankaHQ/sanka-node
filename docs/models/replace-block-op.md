# ReplaceBlockOp

## Example Usage

```typescript
import { ReplaceBlockOp } from "sanka-sdk/models";

let value: ReplaceBlockOp = {
  op: "replace_block",
  slideId: "<id>",
  blockId: "<id>",
  block: {},
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `op`                  | *"replace_block"*     | :heavy_check_mark:    | N/A                   |
| `slideId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `blockId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `block`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |