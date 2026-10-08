# SetThemeOp

## Example Usage

```typescript
import { SetThemeOp } from "sanka-sdk/models";

let value: SetThemeOp = {
  op: "set_theme",
  theme: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `op`                  | *"set_theme"*         | :heavy_check_mark:    | N/A                   |
| `theme`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |