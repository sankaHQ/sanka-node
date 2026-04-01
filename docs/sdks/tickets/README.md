# Tickets

## Overview

### Available Operations

* [list](#list) - List Tickets
* [create](#create) - Create Ticket
* [listPipelines](#listpipelines) - List Ticket Pipelines
* [get](#get) - Get Ticket
* [update](#update) - Update Ticket
* [delete](#delete) - Delete Ticket
* [updateStatus](#updatestatus) - Update Ticket Status

## list

List Tickets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_list_public_tickets" method="get" path="/v1/public/tickets" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsList } from "sanka-sdk/funcs/tickets-list.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsList(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiListPublicTicketsRequest](../../models/operations/api-routers-v1-tickets-public-api-list-public-tickets-request.md)                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TicketSchema[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403                    | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## create

Create Ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_create_public_ticket" method="post" path="/v1/public/tickets" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.create({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsCreate } from "sanka-sdk/funcs/tickets-create.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsCreate(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PublicTicketRequest](../../models/public-ticket-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicTicketResponse](../../models/public-ticket-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403, 404, 409          | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## listPipelines

List Ticket Pipelines

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_list_public_ticket_pipelines" method="get" path="/v1/public/tickets/pipelines" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.listPipelines();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsListPipelines } from "sanka-sdk/funcs/tickets-list-pipelines.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsListPipelines(sanka);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsListPipelines failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiListPublicTicketPipelinesRequest](../../models/operations/api-routers-v1-tickets-public-api-list-public-ticket-pipelines-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TicketPipelineSchema[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403                    | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## get

Get Ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_get_public_ticket" method="get" path="/v1/public/tickets/{ticket_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.get({
    ticketId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsGet } from "sanka-sdk/funcs/tickets-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsGet(sanka, {
    ticketId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiGetPublicTicketRequest](../../models/operations/api-routers-v1-tickets-public-api-get-public-ticket-request.md)                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TicketSchema](../../models/ticket-schema.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403, 404               | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## update

Update Ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_update_public_ticket" method="put" path="/v1/public/tickets/{ticket_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.update({
    ticketId: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsUpdate } from "sanka-sdk/funcs/tickets-update.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsUpdate(sanka, {
    ticketId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiUpdatePublicTicketRequest](../../models/operations/api-routers-v1-tickets-public-api-update-public-ticket-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicTicketResponse](../../models/public-ticket-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403, 404, 409          | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## delete

Delete Ticket

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_delete_public_ticket" method="delete" path="/v1/public/tickets/{ticket_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.delete({
    ticketId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsDelete } from "sanka-sdk/funcs/tickets-delete.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsDelete(sanka, {
    ticketId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiDeletePublicTicketRequest](../../models/operations/api-routers-v1-tickets-public-api-delete-public-ticket-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicTicketResponse](../../models/public-ticket-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403, 404, 409          | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |

## updateStatus

Update Ticket Status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="api_routers_v1_tickets_public_api_update_public_ticket_status" method="patch" path="/v1/public/tickets/{ticket_id}/status" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.tickets.updateStatus({
    ticketId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { ticketsUpdateStatus } from "sanka-sdk/funcs/tickets-update-status.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const res = await ticketsUpdateStatus(sanka, {
    ticketId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ticketsUpdateStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApiRoutersV1TicketsPublicApiUpdatePublicTicketStatusRequest](../../models/operations/api-routers-v1-tickets-public-api-update-public-ticket-status-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PublicTicketResponse](../../models/public-ticket-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.TicketsErrorResponse | 400, 403, 404, 409          | application/json            |
| errors.TicketsErrorResponse | 500                         | application/json            |
| errors.SankaDefaultError    | 4XX, 5XX                    | \*/\*                       |