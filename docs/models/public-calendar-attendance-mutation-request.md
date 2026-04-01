# PublicCalendarAttendanceMutationRequest

## Example Usage

```typescript
import { PublicCalendarAttendanceMutationRequest } from "sanka-sdk/models";

let value: PublicCalendarAttendanceMutationRequest = {
  eventId: "<id>",
  name: "<value>",
  email: "Wade.Rutherford@yahoo.com",
  date: "2024-02-01",
  time: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `eventId`          | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `date`             | *string*           | :heavy_check_mark: | N/A                |
| `time`             | *string*           | :heavy_check_mark: | N/A                |
| `timezone`         | *string*           | :heavy_minus_sign: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |