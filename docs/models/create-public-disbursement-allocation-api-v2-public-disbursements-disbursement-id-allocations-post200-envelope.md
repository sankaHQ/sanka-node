# CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost200Envelope

## Example Usage

```typescript
import {
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost200Envelope,
} from "sanka-sdk/models";

let value:
  CreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost200Envelope =
    {
      success: true,
      data: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *true*                                            | :heavy_check_mark:                                | N/A                                               |
| `data`                                            | Record<string, *any*>                             | :heavy_check_mark:                                | N/A                                               |
| `meta`                                            | [models.EnvelopeMeta](../models/envelope-meta.md) | :heavy_check_mark:                                | N/A                                               |