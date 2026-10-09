# HeadingBlock

## Example Usage

```typescript
import { HeadingBlock } from "sanka-sdk/models";

let value: HeadingBlock = {
  type: "heading",
  text: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *"heading"*                        | :heavy_check_mark:                 | N/A                                |
| `id`                               | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `level`                            | [models.Level](../models/level.md) | :heavy_minus_sign:                 | N/A                                |
| `text`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `kicker`                           | *string*                           | :heavy_minus_sign:                 | N/A                                |