# DeletePublicEstimateApiV2PublicEstimatesEstimateIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicEstimateApiV2PublicEstimatesEstimateIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicEstimateApiV2PublicEstimatesEstimateIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `result`                                                                                                                                                                    | [models.DeletePublicEstimateApiV2PublicEstimatesEstimateIdDelete200Envelope](../../models/delete-public-estimate-api-v2-public-estimates-estimate-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |