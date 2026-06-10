# GetPublicEstimateApiV2PublicEstimatesEstimateIdGetResponse

## Example Usage

```typescript
import { GetPublicEstimateApiV2PublicEstimatesEstimateIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicEstimateApiV2PublicEstimatesEstimateIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.GetPublicEstimateApiV2PublicEstimatesEstimateIdGet200Envelope](../../models/get-public-estimate-api-v2-public-estimates-estimate-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |