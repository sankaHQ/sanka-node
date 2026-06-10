# DeletePublicBillApiV2PublicBillsBillIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicBillApiV2PublicBillsBillIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicBillApiV2PublicBillsBillIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
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
      "key2": "<value>",
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
| `result`                                                                                                                                            | [models.DeletePublicBillApiV2PublicBillsBillIdDelete200Envelope](../../models/delete-public-bill-api-v2-public-bills-bill-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |