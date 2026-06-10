# CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostResponse

## Example Usage

```typescript
import {
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostResponse,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPostResponse =
    {
      headers: {
        "key": [
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

| Field                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                         |
| `result`                                                                                                                                                                                                                                    | [models.CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost200Envelope](../../models/create-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                         |