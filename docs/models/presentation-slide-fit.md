# PresentationSlideFit

## Example Usage

```typescript
import { PresentationSlideFit } from "sanka-sdk/models";

let value: PresentationSlideFit = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scale`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `overflow`                                                               | [models.PresentationFitOverflow](../models/presentation-fit-overflow.md) | :heavy_minus_sign:                                                       | Set when content does not fit even at the theme's minimum.               |
| `frames`                                                                 | [models.PresentationFrameFit](../models/presentation-frame-fit.md)[]     | :heavy_minus_sign:                                                       | Free slides: each box's own fit scale and overflow.                      |