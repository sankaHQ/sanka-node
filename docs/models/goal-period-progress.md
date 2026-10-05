# GoalPeriodProgress

## Example Usage

```typescript
import { GoalPeriodProgress } from "sanka-sdk/models";

let value: GoalPeriodProgress = {
  key: "year",
  start: new Date("2026-08-15"),
  end: new Date("2026-10-24"),
  actual: "<value>",
  target: "<value>",
  expected: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `key`                          | [models.Key](../models/key.md) | :heavy_check_mark:             | N/A                            |
| `start`                        | [Date](../types/rfcdate.md)    | :heavy_check_mark:             | N/A                            |
| `end`                          | [Date](../types/rfcdate.md)    | :heavy_check_mark:             | N/A                            |
| `actual`                       | *string*                       | :heavy_check_mark:             | N/A                            |
| `target`                       | *string*                       | :heavy_check_mark:             | N/A                            |
| `expected`                     | *string*                       | :heavy_check_mark:             | N/A                            |