# PublicProjectMutationData

## Example Usage

```typescript
import { PublicProjectMutationData } from "sanka-sdk/models";

let value: PublicProjectMutationData = {
  ok: true,
  status: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ok`                                                | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `status`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `projectId`                                         | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `project`                                           | [models.PublicProject](../models/public-project.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `ctxId`                                             | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `advisories`                                        | Record<string, *any*>[]                             | :heavy_minus_sign:                                  | N/A                                                 |