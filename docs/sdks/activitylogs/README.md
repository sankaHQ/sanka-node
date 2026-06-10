# ActivityLogs

## Overview

### Available Operations

* [listPublicActivityLogsApiV2PublicLogsGet](#listpublicactivitylogsapiv2publiclogsget) - List Public Activity Logs

## listPublicActivityLogsApiV2PublicLogsGet

List Public Activity Logs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_activity_logs_api_v2_public_logs_get" method="get" path="/v2/public/logs" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.activityLogs.listPublicActivityLogsApiV2PublicLogsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { activityLogsListPublicActivityLogsApiV2PublicLogsGet } from "sanka-sdk/funcs/activity-logs-list-public-activity-logs-api-v2-public-logs-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await activityLogsListPublicActivityLogsApiV2PublicLogsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityLogsListPublicActivityLogsApiV2PublicLogsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicActivityLogsApiV2PublicLogsGetRequest](../../models/operations/list-public-activity-logs-api-v2-public-logs-get-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicActivityLogsApiV2PublicLogsGetResponse](../../models/operations/list-public-activity-logs-api-v2-public-logs-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |