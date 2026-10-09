# TableBlock

## Example Usage

```typescript
import { TableBlock } from "sanka-sdk/models";

let value: TableBlock = {
  type: "table",
  columns: [
    {},
  ],
  rows: [
    [],
    [],
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"table"*                                         | :heavy_check_mark:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_minus_sign:                                | N/A                                               |
| `columns`                                         | [models.TableColumn](../models/table-column.md)[] | :heavy_check_mark:                                | N/A                                               |
| `header`                                          | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |
| `rows`                                            | *string*[][]                                      | :heavy_check_mark:                                | N/A                                               |
| `emphasizeFirstColumn`                            | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               |