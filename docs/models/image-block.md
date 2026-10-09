# ImageBlock

## Example Usage

```typescript
import { ImageBlock } from "sanka-sdk/models";

let value: ImageBlock = {
  type: "image",
  assetId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"image"*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `assetId`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `alt`                                                | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `caption`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `fit`                                                | [models.ImageBlockFit](../models/image-block-fit.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `focus`                                              | [models.Focus](../models/focus.md)                   | :heavy_minus_sign:                                   | N/A                                                  |
| `aspect`                                             | [models.Aspect](../models/aspect.md)                 | :heavy_minus_sign:                                   | N/A                                                  |
| `rounded`                                            | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |