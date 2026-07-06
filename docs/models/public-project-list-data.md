# PublicProjectListData

## Example Usage

```typescript
import { PublicProjectListData } from "sanka-sdk/models";

let value: PublicProjectListData = {
  items: [
    {
      id: "<id>",
      projectId: "<id>",
    },
  ],
  page: 279389,
  pageSize: 603760,
  total: 75118,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `items`                                               | [models.PublicProject](../models/public-project.md)[] | :heavy_check_mark:                                    | N/A                                                   |
| `page`                                                | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `pageSize`                                            | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `total`                                               | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `nextCursor`                                          | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `meta`                                                | Record<string, *any*>                                 | :heavy_minus_sign:                                    | N/A                                                   |