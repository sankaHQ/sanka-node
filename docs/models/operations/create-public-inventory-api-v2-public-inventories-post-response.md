# CreatePublicInventoryApiV2PublicInventoriesPostResponse

## Example Usage

```typescript
import { CreatePublicInventoryApiV2PublicInventoriesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicInventoryApiV2PublicInventoriesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                               | Record<string, *string*[]>                                                                                                                              | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `result`                                                                                                                                                | [models.CreatePublicInventoryApiV2PublicInventoriesPost200Envelope](../../models/create-public-inventory-api-v2-public-inventories-post200-envelope.md) | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |