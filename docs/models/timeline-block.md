# TimelineBlock

## Example Usage

```typescript
import { TimelineBlock } from "sanka-sdk/models";

let value: TimelineBlock = {
  type: "timeline",
  items: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"timeline"*                                                           | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `items`                                                                | [models.TimelineItem](../models/timeline-item.md)[]                    | :heavy_check_mark:                                                     | N/A                                                                    |
| `direction`                                                            | [models.TimelineBlockDirection](../models/timeline-block-direction.md) | :heavy_minus_sign:                                                     | N/A                                                                    |