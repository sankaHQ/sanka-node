# ColumnsBlock

Two or three side-by-side stacks of blocks; widths are twelfths and sum to 12.

## Example Usage

```typescript
import { ColumnsBlock } from "sanka-sdk/models";

let value: ColumnsBlock = {
  type: "columns",
  columns: [
    {
      width: 708464,
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `type`                                 | *"columns"*                            | :heavy_check_mark:                     | N/A                                    |
| `id`                                   | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `columns`                              | [models.Column](../models/column.md)[] | :heavy_check_mark:                     | N/A                                    |