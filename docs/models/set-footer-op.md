# SetFooterOp

## Example Usage

```typescript
import { SetFooterOp } from "sanka-sdk/models";

let value: SetFooterOp = {
  op: "set_footer",
  footer: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `op`                  | *"set_footer"*        | :heavy_check_mark:    | N/A                   |
| `footer`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |