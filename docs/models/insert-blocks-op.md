# InsertBlocksOp

## Example Usage

```typescript
import { InsertBlocksOp } from "sanka-sdk/models";

let value: InsertBlocksOp = {
  op: "insert_blocks",
  slideId: "<id>",
  blocks: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `op`                                                       | *"insert_blocks"*                                          | :heavy_check_mark:                                         | N/A                                                        |
| `slideId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `parent`                                                   | [models.BlockParent](../models/block-parent.md)            | :heavy_minus_sign:                                         | Insert into this column instead of the slide's top level.  |
| `after`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Block to insert after; null inserts first; omit to append. |
| `blocks`                                                   | Record<string, *any*>[]                                    | :heavy_check_mark:                                         | N/A                                                        |