# PublicProject

## Example Usage

```typescript
import { PublicProject } from "sanka-sdk/models";

let value: PublicProject = {
  id: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `projectId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `title`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `default`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `statuses`                                                         | [models.PublicProjectStatus](../models/public-project-status.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `taskCount`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `activeTaskCount`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `createdAt`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `updatedAt`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |