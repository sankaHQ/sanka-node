# PresentationPreviewSlide

## Example Usage

```typescript
import { PresentationPreviewSlide } from "sanka-sdk/models";

let value: PresentationPreviewSlide = {
  slideId: "<id>",
  index: 48327,
  image: {
    contentType: "<value>",
    base64: "<value>",
  },
  fit: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `slideId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `index`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | 0-based position in the deck.                                              |
| `image`                                                                    | [models.PresentationPreviewImage](../models/presentation-preview-image.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `fit`                                                                      | [models.PresentationSlideFit](../models/presentation-slide-fit.md)         | :heavy_check_mark:                                                         | N/A                                                                        |