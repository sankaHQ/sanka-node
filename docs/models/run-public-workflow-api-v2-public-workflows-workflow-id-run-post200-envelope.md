# RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPost200Envelope

## Example Usage

```typescript
import { RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPost200Envelope } from "sanka-sdk/models";

let value: RunPublicWorkflowApiV2PublicWorkflowsWorkflowIdRunPost200Envelope = {
  success: true,
  data: {
    "key": "<value>",
    "key1": "<value>",
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