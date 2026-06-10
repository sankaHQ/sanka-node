# GetPublicInventoryApiV2PublicInventoriesInventoryIdGetResponse

## Example Usage

```typescript
import { GetPublicInventoryApiV2PublicInventoriesInventoryIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicInventoryApiV2PublicInventoriesInventoryIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
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

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `result`                                                                                                                                                                | [models.GetPublicInventoryApiV2PublicInventoriesInventoryIdGet200Envelope](../../models/get-public-inventory-api-v2-public-inventories-inventory-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |