# UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutResponse

## Example Usage

```typescript
import { UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutResponse } from "sanka-sdk/models/operations";

let value:
  UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPutResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
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

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |
| `result`                                                                                                                                                                                                      | [models.UpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPut200Envelope](../../models/update-public-payment-allocations-api-v2-public-payments-payment-id-allocations-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |