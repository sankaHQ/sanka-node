# DeletePublicItemApiV2PublicItemsItemIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicItemApiV2PublicItemsItemIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicItemApiV2PublicItemsItemIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.DeletePublicItemApiV2PublicItemsItemIdDelete200Envelope](../../models/delete-public-item-api-v2-public-items-item-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |