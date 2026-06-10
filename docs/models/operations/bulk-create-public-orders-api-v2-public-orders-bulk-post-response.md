# BulkCreatePublicOrdersApiV2PublicOrdersBulkPostResponse

## Example Usage

```typescript
import { BulkCreatePublicOrdersApiV2PublicOrdersBulkPostResponse } from "sanka-sdk/models/operations";

let value: BulkCreatePublicOrdersApiV2PublicOrdersBulkPostResponse = {
  headers: {
    "key": [],
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.BulkCreatePublicOrdersApiV2PublicOrdersBulkPost200Envelope](../../models/bulk-create-public-orders-api-v2-public-orders-bulk-post200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |