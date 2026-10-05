# GoalTargetCell

## Example Usage

```typescript
import { GoalTargetCell } from "sanka-sdk/models";

let value: GoalTargetCell = {
  month: new Date("2025-12-29"),
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `ownerId`                   | *number*                    | :heavy_minus_sign:          | N/A                         |
| `month`                     | [Date](../types/rfcdate.md) | :heavy_check_mark:          | N/A                         |
| `target`                    | *models.Target*             | :heavy_minus_sign:          | N/A                         |