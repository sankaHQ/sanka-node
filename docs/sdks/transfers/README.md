# Transfers

## Overview

### Available Operations

* [getPublicTransferHistoryApiV2PublicTransfersHistoryIdGet](#getpublictransferhistoryapiv2publictransfershistoryidget) - Get Public Transfer History

## getPublicTransferHistoryApiV2PublicTransfersHistoryIdGet

Get Public Transfer History

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_public_transfer_history_api_v2_public_transfers__history_id__get" method="get" path="/v2/public/transfers/{history_id}" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.transfers.getPublicTransferHistoryApiV2PublicTransfersHistoryIdGet({
    historyId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { transfersGetPublicTransferHistoryApiV2PublicTransfersHistoryIdGet } from "sanka-sdk/funcs/transfers-get-public-transfer-history-api-v2-public-transfers-history-id-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transfersGetPublicTransferHistoryApiV2PublicTransfersHistoryIdGet(sanka, {
    historyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGetPublicTransferHistoryApiV2PublicTransfersHistoryIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                           | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                           | [operations.GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGetRequest](../../models/operations/get-public-transfer-history-api-v2-public-transfers-history-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                  | The request object to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                           | RequestOptions                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                             | :heavy_minus_sign:                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.      |
| `options.retries`                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                    |

### Response

**Promise\<[operations.GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGetResponse](../../models/operations/get-public-transfer-history-api-v2-public-transfers-history-id-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |