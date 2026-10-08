# UpdateBlockOp

## Example Usage

```typescript
import { UpdateBlockOp } from "sanka-sdk/models";

let value: UpdateBlockOp = {
  op: "update_block",
  slideId: "<id>",
  blockId: "<id>",
  set: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `op`                                  | *"update_block"*                      | :heavy_check_mark:                    | N/A                                   |
| `slideId`                             | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `blockId`                             | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `set`                                 | Record<string, *any*>                 | :heavy_check_mark:                    | Type-specific block fields to change. |