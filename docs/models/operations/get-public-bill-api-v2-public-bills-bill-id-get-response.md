# GetPublicBillApiV2PublicBillsBillIdGetResponse

## Example Usage

```typescript
import { GetPublicBillApiV2PublicBillsBillIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicBillApiV2PublicBillsBillIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [models.GetPublicBillApiV2PublicBillsBillIdGet200Envelope](../../models/get-public-bill-api-v2-public-bills-bill-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |