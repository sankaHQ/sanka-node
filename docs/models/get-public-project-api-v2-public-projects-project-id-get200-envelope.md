# GetPublicProjectApiV2PublicProjectsProjectIdGet200Envelope

## Example Usage

```typescript
import { GetPublicProjectApiV2PublicProjectsProjectIdGet200Envelope } from "sanka-sdk/models";

let value: GetPublicProjectApiV2PublicProjectsProjectIdGet200Envelope = {
  success: true,
  data: {
    id: "<id>",
    projectId: "<id>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `success`                                           | *true*                                              | :heavy_check_mark:                                  | N/A                                                 |
| `data`                                              | [models.PublicProject](../models/public-project.md) | :heavy_check_mark:                                  | N/A                                                 |
| `meta`                                              | [models.EnvelopeMeta](../models/envelope-meta.md)   | :heavy_check_mark:                                  | N/A                                                 |