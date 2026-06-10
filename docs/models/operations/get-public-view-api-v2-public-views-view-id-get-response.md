# GetPublicViewApiV2PublicViewsViewIdGetResponse

## Example Usage

```typescript
import { GetPublicViewApiV2PublicViewsViewIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicViewApiV2PublicViewsViewIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
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

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [models.GetPublicViewApiV2PublicViewsViewIdGet200Envelope](../../models/get-public-view-api-v2-public-views-view-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |