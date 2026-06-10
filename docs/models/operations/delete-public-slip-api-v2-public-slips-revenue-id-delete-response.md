# DeletePublicSlipApiV2PublicSlipsRevenueIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicSlipApiV2PublicSlipsRevenueIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicSlipApiV2PublicSlipsRevenueIdDeleteResponse = {
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
| `result`                                                                                                                                                  | [models.DeletePublicSlipApiV2PublicSlipsRevenueIdDelete200Envelope](../../models/delete-public-slip-api-v2-public-slips-revenue-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |