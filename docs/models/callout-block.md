# CalloutBlock

## Example Usage

```typescript
import { CalloutBlock } from "sanka-sdk/models";

let value: CalloutBlock = {
  type: "callout",
  markdown: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"callout"*                                                    | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `tone`                                                         | [models.CalloutBlockTone](../models/callout-block-tone.md)     | :heavy_minus_sign:                                             | N/A                                                            |
| `markdown`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `fontSize`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Main text size in stage px (free slides only); 1 px = 0.75 pt. |
| `frame`                                                        | [models.Frame](../models/frame.md)                             | :heavy_minus_sign:                                             | N/A                                                            |