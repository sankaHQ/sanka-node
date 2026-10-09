# PresentationPreviewRequest

## Example Usage

```typescript
import { PresentationPreviewRequest } from "sanka-sdk/models";

let value: PresentationPreviewRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `slideIds`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Slides to preview (up to 12); omit for the first 12 visible slides.                         |
| `width`                                                                                     | [models.Width](../models/width.md)                                                          | :heavy_minus_sign:                                                                          | Image width in px.                                                                          |
| `format`                                                                                    | [models.PresentationPreviewRequestFormat](../models/presentation-preview-request-format.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |