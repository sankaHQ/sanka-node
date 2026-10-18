# QuoteBlock

## Example Usage

```typescript
import { QuoteBlock } from "sanka-sdk/models";

let value: QuoteBlock = {
  type: "quote",
  text: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"quote"*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `text`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `attribution`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `fontSize`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Main text size in stage px (free slides only); 1 px = 0.75 pt. |
| `frame`                                                        | [models.Frame](../models/frame.md)                             | :heavy_minus_sign:                                             | N/A                                                            |