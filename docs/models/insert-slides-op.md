# InsertSlidesOp

## Example Usage

```typescript
import { InsertSlidesOp } from "sanka-sdk/models";

let value: InsertSlidesOp = {
  op: "insert_slides",
  slides: [
    {},
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `op`                                                       | *"insert_slides"*                                          | :heavy_check_mark:                                         | N/A                                                        |
| `after`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Slide to insert after; null inserts first; omit to append. |
| `slides`                                                   | Record<string, *any*>[]                                    | :heavy_check_mark:                                         | N/A                                                        |