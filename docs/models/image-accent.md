# ImageAccent

## Example Usage

```typescript
import { ImageAccent } from "sanka-sdk/models";

let value: ImageAccent = {
  type: "image",
  assetId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"image"*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `assetId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `fit`                                                  | [models.ImageAccentFit](../models/image-accent-fit.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `focus`                                                | [models.Focus](../models/focus.md)                     | :heavy_minus_sign:                                     | N/A                                                    |
| `alt`                                                  | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |