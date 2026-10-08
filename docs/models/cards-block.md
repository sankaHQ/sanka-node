# CardsBlock

## Example Usage

```typescript
import { CardsBlock } from "sanka-sdk/models";

let value: CardsBlock = {
  type: "cards",
  items: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `type`                                      | *"cards"*                                   | :heavy_check_mark:                          | N/A                                         |
| `id`                                        | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `items`                                     | [models.CardItem](../models/card-item.md)[] | :heavy_check_mark:                          | N/A                                         |
| `columns`                                   | [models.Columns](../models/columns.md)      | :heavy_minus_sign:                          | N/A                                         |
| `style`                                     | [models.Style](../models/style.md)          | :heavy_minus_sign:                          | N/A                                         |