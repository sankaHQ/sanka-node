# Slide

## Example Usage

```typescript
import { Slide } from "sanka-sdk/models";

let value: Slide = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `layout`                                                 | [models.Layout](../models/layout.md)                     | :heavy_minus_sign:                                       | N/A                                                      |
| `accent`                                                 | *models.Accent*                                          | :heavy_minus_sign:                                       | N/A                                                      |
| `accentSize`                                             | [models.Accentsize](../models/accentsize.md)             | :heavy_minus_sign:                                       | N/A                                                      |
| `overlay`                                                | [models.Overlay](../models/overlay.md)                   | :heavy_minus_sign:                                       | Shade over a background accent (accent-background only). |
| `align`                                                  | [models.SlideAlign](../models/slide-align.md)            | :heavy_minus_sign:                                       | N/A                                                      |
| `background`                                             | [models.Background](../models/background.md)             | :heavy_minus_sign:                                       | N/A                                                      |
| `blocks`                                                 | *models.SlideBlock*[]                                    | :heavy_minus_sign:                                       | N/A                                                      |
| `notes`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `hidden`                                                 | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |