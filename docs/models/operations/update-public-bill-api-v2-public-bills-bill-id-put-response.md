# UpdatePublicBillApiV2PublicBillsBillIdPutResponse

## Example Usage

```typescript
import { UpdatePublicBillApiV2PublicBillsBillIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicBillApiV2PublicBillsBillIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.UpdatePublicBillApiV2PublicBillsBillIdPut200Envelope](../../models/update-public-bill-api-v2-public-bills-bill-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |