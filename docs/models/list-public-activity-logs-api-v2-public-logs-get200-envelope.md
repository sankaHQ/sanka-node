# ListPublicActivityLogsApiV2PublicLogsGet200Envelope

## Example Usage

```typescript
import { ListPublicActivityLogsApiV2PublicLogsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicActivityLogsApiV2PublicLogsGet200Envelope = {
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