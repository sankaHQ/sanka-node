# CreatePublicProjectApiV2PublicProjectsPost200Envelope

## Example Usage

```typescript
import { CreatePublicProjectApiV2PublicProjectsPost200Envelope } from "sanka-sdk/models";

let value: CreatePublicProjectApiV2PublicProjectsPost200Envelope = {
  success: true,
  data: {
    ok: true,
    status: "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `success`                                                                     | *true*                                                                        | :heavy_check_mark:                                                            | N/A                                                                           |
| `data`                                                                        | [models.PublicProjectMutationData](../models/public-project-mutation-data.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `meta`                                                                        | [models.EnvelopeMeta](../models/envelope-meta.md)                             | :heavy_check_mark:                                                            | N/A                                                                           |