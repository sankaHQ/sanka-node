# DeleteBlocksOp

## Example Usage

```typescript
import { DeleteBlocksOp } from "sanka-sdk/models";

let value: DeleteBlocksOp = {
  op: "delete_blocks",
  slideId: "<id>",
  blockIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `op`               | *"delete_blocks"*  | :heavy_check_mark: | N/A                |
| `slideId`          | *string*           | :heavy_check_mark: | N/A                |
| `blockIds`         | *string*[]         | :heavy_check_mark: | N/A                |