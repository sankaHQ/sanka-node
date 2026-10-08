# TextBlock

## Example Usage

```typescript
import { TextBlock } from "sanka-sdk/models";

let value: TextBlock = {
  type: "text",
  markdown: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"text"*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `markdown`                                           | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `size`                                               | [models.TextBlockSize](../models/text-block-size.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `tone`                                               | [models.TextBlockTone](../models/text-block-tone.md) | :heavy_minus_sign:                                   | N/A                                                  |