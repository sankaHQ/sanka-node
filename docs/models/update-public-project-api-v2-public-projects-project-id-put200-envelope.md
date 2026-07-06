# UpdatePublicProjectApiV2PublicProjectsProjectIdPut200Envelope

## Example Usage

```typescript
import { UpdatePublicProjectApiV2PublicProjectsProjectIdPut200Envelope } from "sanka-sdk/models";

let value: UpdatePublicProjectApiV2PublicProjectsProjectIdPut200Envelope = {
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