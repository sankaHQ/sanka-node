# GetPublicViewColumnsApiV2PublicViewsViewIdColumnsGetResponse

## Example Usage

```typescript
import { GetPublicViewColumnsApiV2PublicViewsViewIdColumnsGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicViewColumnsApiV2PublicViewsViewIdColumnsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
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

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.GetPublicViewColumnsApiV2PublicViewsViewIdColumnsGet200Envelope](../../models/get-public-view-columns-api-v2-public-views-view-id-columns-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |