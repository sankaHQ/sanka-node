# StatsBlock

## Example Usage

```typescript
import { StatsBlock } from "sanka-sdk/models";

let value: StatsBlock = {
  type: "stats",
  items: [
    {
      value: "<value>",
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `type`                                      | *"stats"*                                   | :heavy_check_mark:                          | N/A                                         |
| `id`                                        | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `items`                                     | [models.StatItem](../models/stat-item.md)[] | :heavy_check_mark:                          | N/A                                         |