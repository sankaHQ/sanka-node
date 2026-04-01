# Calendar

## Overview

### Available Operations

* [bootstrap](#bootstrap) - Public Calendar Bootstrap
* [availability](#availability) - Public Calendar Availability
* [createAttendance](#createattendance) - Public Calendar Create Attendance
* [rescheduleAttendance](#rescheduleattendance) - Public Calendar Reschedule Attendance
* [cancelAttendance](#cancelattendance) - Public Calendar Cancel Attendance

## bootstrap

Public Calendar Bootstrap

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_calendar_public_api_public_calendar_bootstrap" method="get" path="/v1/public/calendar/bootstrap" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.calendar.bootstrap({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { calendarBootstrap } from "sanka-sdk/funcs/calendar-bootstrap.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await calendarBootstrap(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarBootstrap failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1CalendarPublicApiPublicCalendarBootstrapRequest](../../models/operations/api-routers-v1-calendar-public-api-public-calendar-bootstrap-request.md)      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicCalendarBootstrapResponse](../../models/public-calendar-bootstrap-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CalendarErrorResponse | 404                          | application/json             |
| errors.CalendarErrorResponse | 500                          | application/json             |
| errors.SankaDefaultError     | 4XX, 5XX                     | \*/\*                        |

## availability

Public Calendar Availability

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_calendar_public_api_public_calendar_availability" method="get" path="/v1/public/calendar/availability" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.calendar.availability({
    eventId: "<id>",
    startDate: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { calendarAvailability } from "sanka-sdk/funcs/calendar-availability.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await calendarAvailability(sanka, {
    eventId: "<id>",
    startDate: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarAvailability failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.ApiRoutersV1CalendarPublicApiPublicCalendarAvailabilityRequest](../../models/operations/api-routers-v1-calendar-public-api-public-calendar-availability-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[models.PublicCalendarAvailabilityResponse](../../models/public-calendar-availability-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CalendarErrorResponse | 400                          | application/json             |
| errors.CalendarErrorResponse | 500                          | application/json             |
| errors.SankaDefaultError     | 4XX, 5XX                     | \*/\*                        |

## createAttendance

Public Calendar Create Attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_calendar_public_api_public_calendar_create_attendance" method="post" path="/v1/public/calendar/attendance" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.calendar.createAttendance({
    eventId: "<id>",
    name: "<value>",
    email: "Gino.Ortiz@yahoo.com",
    date: "2024-01-19",
    time: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { calendarCreateAttendance } from "sanka-sdk/funcs/calendar-create-attendance.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await calendarCreateAttendance(sanka, {
    eventId: "<id>",
    name: "<value>",
    email: "Gino.Ortiz@yahoo.com",
    date: "2024-01-19",
    time: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCreateAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PublicCalendarAttendanceMutationRequest](../../models/public-calendar-attendance-mutation-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicCalendarMutationResponse](../../models/public-calendar-mutation-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CalendarErrorResponse | 400                          | application/json             |
| errors.CalendarErrorResponse | 500                          | application/json             |
| errors.SankaDefaultError     | 4XX, 5XX                     | \*/\*                        |

## rescheduleAttendance

Public Calendar Reschedule Attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_calendar_public_api_public_calendar_reschedule_attendance" method="post" path="/v1/public/calendar/attendance/{attendance_id}/reschedule" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.calendar.rescheduleAttendance({
    attendanceId: "<id>",
    body: {
      date: "2024-07-05",
      time: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { calendarRescheduleAttendance } from "sanka-sdk/funcs/calendar-reschedule-attendance.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await calendarRescheduleAttendance(sanka, {
    attendanceId: "<id>",
    body: {
      date: "2024-07-05",
      time: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarRescheduleAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.ApiRoutersV1CalendarPublicApiPublicCalendarRescheduleAttendanceRequest](../../models/operations/api-routers-v1-calendar-public-api-public-calendar-reschedule-attendance-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[models.PublicCalendarMutationResponse](../../models/public-calendar-mutation-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CalendarErrorResponse | 400                          | application/json             |
| errors.CalendarErrorResponse | 500                          | application/json             |
| errors.SankaDefaultError     | 4XX, 5XX                     | \*/\*                        |

## cancelAttendance

Public Calendar Cancel Attendance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_calendar_public_api_public_calendar_cancel_attendance" method="post" path="/v1/public/calendar/attendance/{attendance_id}/cancel" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.calendar.cancelAttendance({
    attendanceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { calendarCancelAttendance } from "sanka-sdk/funcs/calendar-cancel-attendance.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await calendarCancelAttendance(sanka, {
    attendanceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarCancelAttendance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.ApiRoutersV1CalendarPublicApiPublicCalendarCancelAttendanceRequest](../../models/operations/api-routers-v1-calendar-public-api-public-calendar-cancel-attendance-request.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[models.PublicCalendarMutationResponse](../../models/public-calendar-mutation-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CalendarErrorResponse | 400                          | application/json             |
| errors.CalendarErrorResponse | 500                          | application/json             |
| errors.SankaDefaultError     | 4XX, 5XX                     | \*/\*                        |