# ListPublicViewsApiV2PublicViewsGetResponse

## Example Usage

```typescript
import { ListPublicViewsApiV2PublicViewsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicViewsApiV2PublicViewsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [models.ListPublicViewsApiV2PublicViewsGet200Envelope](../../models/list-public-views-api-v2-public-views-get200-envelope.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |