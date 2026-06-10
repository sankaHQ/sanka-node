# CreatePublicEstimateApiV2PublicEstimatesPostResponse

## Example Usage

```typescript
import { CreatePublicEstimateApiV2PublicEstimatesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicEstimateApiV2PublicEstimatesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                         | Record<string, *string*[]>                                                                                                                        | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `result`                                                                                                                                          | [models.CreatePublicEstimateApiV2PublicEstimatesPost200Envelope](../../models/create-public-estimate-api-v2-public-estimates-post200-envelope.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |