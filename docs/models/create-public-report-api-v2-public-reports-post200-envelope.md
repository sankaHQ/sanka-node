# CreatePublicReportApiV2PublicReportsPost200Envelope

## Example Usage

```typescript
import { CreatePublicReportApiV2PublicReportsPost200Envelope } from "sanka-sdk/models";

let value: CreatePublicReportApiV2PublicReportsPost200Envelope = {
  success: true,
  data: {
    "key": "<value>",
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