# Lookout

## Overview

### Available Operations

* [ingestClaySignalApiV2LookoutConnectorsClaySignalsPost](#ingestclaysignalapiv2lookoutconnectorsclaysignalspost) - Ingest Clay Signal
* [ingestProviderSignalApiV2LookoutConnectorsProviderSignalsPost](#ingestprovidersignalapiv2lookoutconnectorsprovidersignalspost) - Ingest Provider Signal
* [~~listProviderActionsApiV2LookoutAdActionsGet~~](#listprovideractionsapiv2lookoutadactionsget) - List Provider Actions :warning: **Deprecated**
* [listProviderActionsApiV2LookoutProviderActionsGet](#listprovideractionsapiv2lookoutprovideractionsget) - List Provider Actions
* [~~claimProviderActionApiV2LookoutAdActionsActionIdClaimPost~~](#claimprovideractionapiv2lookoutadactionsactionidclaimpost) - Claim Provider Action :warning: **Deprecated**
* [claimProviderActionApiV2LookoutProviderActionsActionIdClaimPost](#claimprovideractionapiv2lookoutprovideractionsactionidclaimpost) - Claim Provider Action
* [~~completeProviderActionApiV2LookoutAdActionsActionIdCompletePost~~](#completeprovideractionapiv2lookoutadactionsactionidcompletepost) - Complete Provider Action :warning: **Deprecated**
* [completeProviderActionApiV2LookoutProviderActionsActionIdCompletePost](#completeprovideractionapiv2lookoutprovideractionsactionidcompletepost) - Complete Provider Action

## ingestClaySignalApiV2LookoutConnectorsClaySignalsPost

Ingest Clay Signal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ingest_clay_signal_api_v2_lookout_connectors_clay_signals_post" method="post" path="/v2/lookout/connectors/clay/signals" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.ingestClaySignalApiV2LookoutConnectorsClaySignalsPost({
    body: {
      signalType: "<value>",
      dedupeKey: "<value>",
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
import { lookoutIngestClaySignalApiV2LookoutConnectorsClaySignalsPost } from "sanka-sdk/funcs/lookout-ingest-clay-signal-api-v2-lookout-connectors-clay-signals-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutIngestClaySignalApiV2LookoutConnectorsClaySignalsPost(sanka, {
    body: {
      signalType: "<value>",
      dedupeKey: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutIngestClaySignalApiV2LookoutConnectorsClaySignalsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IngestClaySignalApiV2LookoutConnectorsClaySignalsPostRequest](../../models/operations/ingest-clay-signal-api-v2-lookout-connectors-clay-signals-post-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IngestClaySignalApiV2LookoutConnectorsClaySignalsPostResponse](../../models/operations/ingest-clay-signal-api-v2-lookout-connectors-clay-signals-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## ingestProviderSignalApiV2LookoutConnectorsProviderSignalsPost

Ingest Provider Signal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ingest_provider_signal_api_v2_lookout_connectors__provider__signals_post" method="post" path="/v2/lookout/connectors/{provider}/signals" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.ingestProviderSignalApiV2LookoutConnectorsProviderSignalsPost({
    provider: "<value>",
    body: {
      signalType: "<value>",
      dedupeKey: "<value>",
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
import { lookoutIngestProviderSignalApiV2LookoutConnectorsProviderSignalsPost } from "sanka-sdk/funcs/lookout-ingest-provider-signal-api-v2-lookout-connectors-provider-signals-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutIngestProviderSignalApiV2LookoutConnectorsProviderSignalsPost(sanka, {
    provider: "<value>",
    body: {
      signalType: "<value>",
      dedupeKey: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutIngestProviderSignalApiV2LookoutConnectorsProviderSignalsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostRequest](../../models/operations/ingest-provider-signal-api-v2-lookout-connectors-provider-signals-post-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.IngestProviderSignalApiV2LookoutConnectorsProviderSignalsPostResponse](../../models/operations/ingest-provider-signal-api-v2-lookout-connectors-provider-signals-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## ~~listProviderActionsApiV2LookoutAdActionsGet~~

List Provider Actions

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_provider_actions_api_v2_lookout_ad_actions_get" method="get" path="/v2/lookout/ad-actions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.listProviderActionsApiV2LookoutAdActionsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { lookoutListProviderActionsApiV2LookoutAdActionsGet } from "sanka-sdk/funcs/lookout-list-provider-actions-api-v2-lookout-ad-actions-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutListProviderActionsApiV2LookoutAdActionsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutListProviderActionsApiV2LookoutAdActionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProviderActionsApiV2LookoutAdActionsGetRequest](../../models/operations/list-provider-actions-api-v2-lookout-ad-actions-get-request.md)                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProviderActionsApiV2LookoutAdActionsGetResponse](../../models/operations/list-provider-actions-api-v2-lookout-ad-actions-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## listProviderActionsApiV2LookoutProviderActionsGet

List Provider Actions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_provider_actions_api_v2_lookout_provider_actions_get" method="get" path="/v2/lookout/provider-actions" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.listProviderActionsApiV2LookoutProviderActionsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { lookoutListProviderActionsApiV2LookoutProviderActionsGet } from "sanka-sdk/funcs/lookout-list-provider-actions-api-v2-lookout-provider-actions-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutListProviderActionsApiV2LookoutProviderActionsGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutListProviderActionsApiV2LookoutProviderActionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProviderActionsApiV2LookoutProviderActionsGetRequest](../../models/operations/list-provider-actions-api-v2-lookout-provider-actions-get-request.md)            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProviderActionsApiV2LookoutProviderActionsGetResponse](../../models/operations/list-provider-actions-api-v2-lookout-provider-actions-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## ~~claimProviderActionApiV2LookoutAdActionsActionIdClaimPost~~

Claim Provider Action

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="claim_provider_action_api_v2_lookout_ad_actions__action_id__claim_post" method="post" path="/v2/lookout/ad-actions/{action_id}/claim" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.claimProviderActionApiV2LookoutAdActionsActionIdClaimPost({
    actionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { lookoutClaimProviderActionApiV2LookoutAdActionsActionIdClaimPost } from "sanka-sdk/funcs/lookout-claim-provider-action-api-v2-lookout-ad-actions-action-id-claim-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutClaimProviderActionApiV2LookoutAdActionsActionIdClaimPost(sanka, {
    actionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutClaimProviderActionApiV2LookoutAdActionsActionIdClaimPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.ClaimProviderActionApiV2LookoutAdActionsActionIdClaimPostRequest](../../models/operations/claim-provider-action-api-v2-lookout-ad-actions-action-id-claim-post-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.ClaimProviderActionApiV2LookoutAdActionsActionIdClaimPostResponse](../../models/operations/claim-provider-action-api-v2-lookout-ad-actions-action-id-claim-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## claimProviderActionApiV2LookoutProviderActionsActionIdClaimPost

Claim Provider Action

### Example Usage

<!-- UsageSnippet language="typescript" operationID="claim_provider_action_api_v2_lookout_provider_actions__action_id__claim_post" method="post" path="/v2/lookout/provider-actions/{action_id}/claim" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.claimProviderActionApiV2LookoutProviderActionsActionIdClaimPost({
    actionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { lookoutClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost } from "sanka-sdk/funcs/lookout-claim-provider-action-api-v2-lookout-provider-actions-action-id-claim-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost(sanka, {
    actionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.ClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPostRequest](../../models/operations/claim-provider-action-api-v2-lookout-provider-actions-action-id-claim-post-request.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.ClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPostResponse](../../models/operations/claim-provider-action-api-v2-lookout-provider-actions-action-id-claim-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## ~~completeProviderActionApiV2LookoutAdActionsActionIdCompletePost~~

Complete Provider Action

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="complete_provider_action_api_v2_lookout_ad_actions__action_id__complete_post" method="post" path="/v2/lookout/ad-actions/{action_id}/complete" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.completeProviderActionApiV2LookoutAdActionsActionIdCompletePost({
    actionId: "<id>",
    body: {
      status: "failed",
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
import { lookoutCompleteProviderActionApiV2LookoutAdActionsActionIdCompletePost } from "sanka-sdk/funcs/lookout-complete-provider-action-api-v2-lookout-ad-actions-action-id-complete-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutCompleteProviderActionApiV2LookoutAdActionsActionIdCompletePost(sanka, {
    actionId: "<id>",
    body: {
      status: "failed",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutCompleteProviderActionApiV2LookoutAdActionsActionIdCompletePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostRequest](../../models/operations/complete-provider-action-api-v2-lookout-ad-actions-action-id-complete-post-request.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostResponse](../../models/operations/complete-provider-action-api-v2-lookout-ad-actions-action-id-complete-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |

## completeProviderActionApiV2LookoutProviderActionsActionIdCompletePost

Complete Provider Action

### Example Usage

<!-- UsageSnippet language="typescript" operationID="complete_provider_action_api_v2_lookout_provider_actions__action_id__complete_post" method="post" path="/v2/lookout/provider-actions/{action_id}/complete" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.lookout.completeProviderActionApiV2LookoutProviderActionsActionIdCompletePost({
    actionId: "<id>",
    body: {
      status: "succeeded",
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
import { lookoutCompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePost } from "sanka-sdk/funcs/lookout-complete-provider-action-api-v2-lookout-provider-actions-action-id-complete-post.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await lookoutCompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePost(sanka, {
    actionId: "<id>",
    body: {
      status: "succeeded",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lookoutCompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.CompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePostRequest](../../models/operations/complete-provider-action-api-v2-lookout-provider-actions-action-id-complete-post-request.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.CompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePostResponse](../../models/operations/complete-provider-action-api-v2-lookout-provider-actions-action-id-complete-post-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |