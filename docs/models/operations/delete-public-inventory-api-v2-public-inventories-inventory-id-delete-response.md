# DeletePublicInventoryApiV2PublicInventoriesInventoryIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicInventoryApiV2PublicInventoriesInventoryIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicInventoryApiV2PublicInventoriesInventoryIdDeleteResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
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

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `result`                                                                                                                                                                            | [models.DeletePublicInventoryApiV2PublicInventoriesInventoryIdDelete200Envelope](../../models/delete-public-inventory-api-v2-public-inventories-inventory-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |