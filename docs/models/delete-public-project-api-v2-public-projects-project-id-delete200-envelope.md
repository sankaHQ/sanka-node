# DeletePublicProjectApiV2PublicProjectsProjectIdDelete200Envelope

## Example Usage

```typescript
import { DeletePublicProjectApiV2PublicProjectsProjectIdDelete200Envelope } from "sanka-sdk/models";

let value: DeletePublicProjectApiV2PublicProjectsProjectIdDelete200Envelope = {
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *true*                                                                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.PublicProjectDeleteData](../models/public-project-delete-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `meta`                                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)                         | :heavy_check_mark:                                                        | N/A                                                                       |