# UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatchResponse

## Example Usage

```typescript
import {
  UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatchResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatchResponse =
    {
      headers: {
        "key": [],
        "key1": [
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

| Field                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                                                                                                | [models.UpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch200Envelope](../../models/update-public-disbursement-allocation-api-v2-public-disbursements-disbursement-id-allocations-allocation-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                     |