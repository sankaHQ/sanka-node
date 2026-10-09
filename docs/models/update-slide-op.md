# UpdateSlideOp

## Example Usage

```typescript
import { UpdateSlideOp } from "sanka-sdk/models";

let value: UpdateSlideOp = {
  op: "update_slide",
  slideId: "<id>",
  set: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `op`                                                                                           | *"update_slide"*                                                                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `slideId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `set`                                                                                          | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | Slide fields to change: layout, accent, accentSize, overlay, align, background, notes, hidden. |