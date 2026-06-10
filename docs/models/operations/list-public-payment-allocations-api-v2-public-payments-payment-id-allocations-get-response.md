# ListPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGetResponse

## Example Usage

```typescript
import { ListPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGetResponse } from "sanka-sdk/models/operations";

let value:
  ListPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGetResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                        | N/A                                                                                                                                                                                                       |
| `result`                                                                                                                                                                                                  | [models.ListPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGet200Envelope](../../models/list-public-payment-allocations-api-v2-public-payments-payment-id-allocations-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                        | N/A                                                                                                                                                                                                       |