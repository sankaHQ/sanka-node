# ListPublicDealPipelinesApiV2PublicDealsPipelinesGetResponse

## Example Usage

```typescript
import { ListPublicDealPipelinesApiV2PublicDealsPipelinesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicDealPipelinesApiV2PublicDealsPipelinesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.ListPublicDealPipelinesApiV2PublicDealsPipelinesGet200Envelope](../../models/list-public-deal-pipelines-api-v2-public-deals-pipelines-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |