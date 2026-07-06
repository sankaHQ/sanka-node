# ApprovalRequests

## Overview

### Available Operations

* [createApprovalRequestApiV2PublicApprovalRequestsPost](#createapprovalrequestapiv2publicapprovalrequestspost) - Create Approval Request
* [approveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost](#approveapprovalrequestapiv2publicapprovalrequestshistoryidapprovepost) - Approve Approval Request
* [rejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost](#rejectapprovalrequestapiv2publicapprovalrequestshistoryidrejectpost) - Reject Approval Request

## createApprovalRequestApiV2PublicApprovalRequestsPost

Create Approval Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_approval_request_api_v2_public_approval_requests_post" method="post" path="/v2/public/approval-requests" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.approvalRequests.createApprovalRequestApiV2PublicApprovalRequestsPost({
    body: {
      objectType: "<value>",
      recordId: "<id>",
      approverUserIds: [
        "<value 1>",
        "<value 2>",
      ],
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
import { approvalRequestsCreateApprovalRequestApiV2PublicApprovalRequestsPost } from "sanka-sdk/funcs/approval-requests-create-approval-request-api-v2-public-approval-requests-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await approvalRequestsCreateApprovalRequestApiV2PublicApprovalRequestsPost(sanka, {
    body: {
      objectType: "<value>",
      recordId: "<id>",
      approverUserIds: [
        "<value 1>",
        "<value 2>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalRequestsCreateApprovalRequestApiV2PublicApprovalRequestsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApprovalRequestApiV2PublicApprovalRequestsPostRequest](../../models/operations/create-approval-request-api-v2-public-approval-requests-post-request.md)      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApprovalRequestApiV2PublicApprovalRequestsPostResponse](../../models/operations/create-approval-request-api-v2-public-approval-requests-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## approveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost

Approve Approval Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_approval_request_api_v2_public_approval_requests__history_id__approve_post" method="post" path="/v2/public/approval-requests/{history_id}/approve" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.approvalRequests.approveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost({
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
import {
  approvalRequestsApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost,
} from "sanka-sdk/funcs/approval-requests-approve-approval-request-api-v2-public-approval-requests-history-id-approve-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await approvalRequestsApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost(sanka, {
    historyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalRequestsApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.ApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePostRequest](../../models/operations/approve-approval-request-api-v2-public-approval-requests-history-id-approve-post-request.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.ApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePostResponse](../../models/operations/approve-approval-request-api-v2-public-approval-requests-history-id-approve-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## rejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost

Reject Approval Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reject_approval_request_api_v2_public_approval_requests__history_id__reject_post" method="post" path="/v2/public/approval-requests/{history_id}/reject" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.approvalRequests.rejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost({
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
import {
  approvalRequestsRejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost,
} from "sanka-sdk/funcs/approval-requests-reject-approval-request-api-v2-public-approval-requests-history-id-reject-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await approvalRequestsRejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost(sanka, {
    historyId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalRequestsRejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPostRequest](../../models/operations/reject-approval-request-api-v2-public-approval-requests-history-id-reject-post-request.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.RejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPostResponse](../../models/operations/reject-approval-request-api-v2-public-approval-requests-history-id-reject-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 403, 422            | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |