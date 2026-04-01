# PublicCalendarMutationResponse

## Example Usage

```typescript
import { PublicCalendarMutationResponse } from "sanka-sdk/models";

let value: PublicCalendarMutationResponse = {
  status: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ok`                                                                                    | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `status`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `attendance`                                                                            | [models.PublicCalendarAttendanceSchema](../models/public-calendar-attendance-schema.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `meetLink`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `ctxId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |