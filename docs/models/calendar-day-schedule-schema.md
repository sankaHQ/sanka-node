# CalendarDayScheduleSchema

## Example Usage

```typescript
import { CalendarDayScheduleSchema } from "sanka-sdk/models";

let value: CalendarDayScheduleSchema = {
  dayIndex: 977912,
  dayName: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `dayIndex`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `dayName`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `slots`                                                                           | [models.CalendarScheduleSlotSchema](../models/calendar-schedule-slot-schema.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |