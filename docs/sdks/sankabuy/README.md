# SankaBuy

## Overview

### Available Operations

* [listPublicBuyOffersApiV2PublicBuyOffersGet](#listpublicbuyoffersapiv2publicbuyoffersget) - List Public Buy Offers

## listPublicBuyOffersApiV2PublicBuyOffersGet

List Public Buy Offers

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_public_buy_offers_api_v2_public_buy_offers_get" method="get" path="/v2/public/buy/offers" -->
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.sankaBuy.listPublicBuyOffersApiV2PublicBuyOffersGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { sankaBuyListPublicBuyOffersApiV2PublicBuyOffersGet } from "sanka-sdk/funcs/sanka-buy-list-public-buy-offers-api-v2-public-buy-offers-get.js";

// Use `SankaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await sankaBuyListPublicBuyOffersApiV2PublicBuyOffersGet(sanka, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sankaBuyListPublicBuyOffersApiV2PublicBuyOffersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPublicBuyOffersApiV2PublicBuyOffersGetRequest](../../models/operations/list-public-buy-offers-api-v2-public-buy-offers-get-request.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPublicBuyOffersApiV2PublicBuyOffersGetResponse](../../models/operations/list-public-buy-offers-api-v2-public-buy-offers-get-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorEnvelope     | 401, 422                 | application/json         |
| errors.SankaDefaultError | 4XX, 5XX                 | \*/\*                    |