# GetPublicSlipApiV2PublicSlipsRevenueIdGetResponse

## Example Usage

```typescript
import { GetPublicSlipApiV2PublicSlipsRevenueIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicSlipApiV2PublicSlipsRevenueIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.GetPublicSlipApiV2PublicSlipsRevenueIdGet200Envelope](../../models/get-public-slip-api-v2-public-slips-revenue-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |