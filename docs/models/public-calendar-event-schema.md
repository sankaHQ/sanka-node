# PublicCalendarEventSchema

## Example Usage

```typescript
import { PublicCalendarEventSchema } from "sanka-sdk/models";

let value: PublicCalendarEventSchema = {
  id: "<id>",
  title: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `title`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `description`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `status`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `slug`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `url`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `location`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `duration`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `timeIncrement`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `timezone`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `timezoneLabel`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `timezoneLocked`                                                                | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `schedule`                                                                      | [models.CalendarDayScheduleSchema](../models/calendar-day-schedule-schema.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |