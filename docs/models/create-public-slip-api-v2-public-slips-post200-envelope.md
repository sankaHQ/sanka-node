# CreatePublicSlipApiV2PublicSlipsPost200Envelope

## Example Usage

```typescript
import { CreatePublicSlipApiV2PublicSlipsPost200Envelope } from "sanka-sdk/models";

let value: CreatePublicSlipApiV2PublicSlipsPost200Envelope = {
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