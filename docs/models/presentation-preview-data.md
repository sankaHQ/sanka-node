# PresentationPreviewData

## Example Usage

```typescript
import { PresentationPreviewData } from "sanka-sdk/models";

let value: PresentationPreviewData = {
  revision: 111894,
  slides: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `revision`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `slides`                                                                     | [models.PresentationPreviewSlide](../models/presentation-preview-slide.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `warnings`                                                                   | Record<string, *any*>[]                                                      | :heavy_minus_sign:                                                           | N/A                                                                          |