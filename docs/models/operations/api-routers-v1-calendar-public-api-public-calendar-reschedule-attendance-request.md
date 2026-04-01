# ApiRoutersV1CalendarPublicApiPublicCalendarRescheduleAttendanceRequest

## Example Usage

```typescript
import { ApiRoutersV1CalendarPublicApiPublicCalendarRescheduleAttendanceRequest } from "sanka-sdk/models/operations";

let value:
  ApiRoutersV1CalendarPublicApiPublicCalendarRescheduleAttendanceRequest = {
    attendanceId: "<id>",
    body: {
      date: "2024-08-08",
      time: "<value>",
    },
  };
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `attendanceId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `body`                                                                                       | [models.PublicCalendarRescheduleRequest](../../models/public-calendar-reschedule-request.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |