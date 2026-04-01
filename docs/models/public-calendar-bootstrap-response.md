# PublicCalendarBootstrapResponse

## Example Usage

```typescript
import { PublicCalendarBootstrapResponse } from "sanka-sdk/models";

let value: PublicCalendarBootstrapResponse = {
  status: "<value>",
  mode: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `status`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `mode`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `workspace`                                                                             | [models.CalendarWorkspaceSchema](../models/calendar-workspace-schema.md)                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `event`                                                                                 | [models.PublicCalendarEventSchema](../models/public-calendar-event-schema.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `attendance`                                                                            | [models.PublicCalendarAttendanceSchema](../models/public-calendar-attendance-schema.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `ctxId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |