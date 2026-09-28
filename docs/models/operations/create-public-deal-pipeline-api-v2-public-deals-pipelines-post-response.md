# CreatePublicDealPipelineApiV2PublicDealsPipelinesPostResponse

## Example Usage

```typescript
import { CreatePublicDealPipelineApiV2PublicDealsPipelinesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicDealPipelineApiV2PublicDealsPipelinesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      name: "<value>",
      internalName: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.CreatePublicDealPipelineApiV2PublicDealsPipelinesPost201Envelope](../../models/create-public-deal-pipeline-api-v2-public-deals-pipelines-post201-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |