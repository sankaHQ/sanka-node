# StepsBlock

## Example Usage

```typescript
import { StepsBlock } from "sanka-sdk/models";

let value: StepsBlock = {
  type: "steps",
  items: [
    {
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"steps"*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `items`                                                          | [models.StepItem](../models/step-item.md)[]                      | :heavy_check_mark:                                               | N/A                                                              |
| `direction`                                                      | [models.StepsBlockDirection](../models/steps-block-direction.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `textScale`                                                      | *number*                                                         | :heavy_minus_sign:                                               | Multiplier on the block's whole type scale (free slides only).   |
| `frame`                                                          | [models.Frame](../models/frame.md)                               | :heavy_minus_sign:                                               | N/A                                                              |