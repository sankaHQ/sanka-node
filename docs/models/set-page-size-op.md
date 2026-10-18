# SetPageSizeOp

## Example Usage

```typescript
import { SetPageSizeOp } from "sanka-sdk/models";

let value: SetPageSizeOp = {
  op: "set_page_size",
  size: "a4-landscape",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `op`                                                                    | *"set_page_size"*                                                       | :heavy_check_mark:                                                      | N/A                                                                     |
| `size`                                                                  | [models.SetPageSizeOpSize](../models/set-page-size-op-size.md)          | :heavy_check_mark:                                                      | Free slides scale uniformly about the stage centre to fit the new size. |