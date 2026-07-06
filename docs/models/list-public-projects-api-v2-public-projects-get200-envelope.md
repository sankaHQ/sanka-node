# ListPublicProjectsApiV2PublicProjectsGet200Envelope

## Example Usage

```typescript
import { ListPublicProjectsApiV2PublicProjectsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicProjectsApiV2PublicProjectsGet200Envelope = {
  success: true,
  data: {
    items: [
      {
        id: "<id>",
        projectId: "<id>",
      },
    ],
    page: 223301,
    pageSize: 7516,
    total: 261961,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `success`                                                             | *true*                                                                | :heavy_check_mark:                                                    | N/A                                                                   |
| `data`                                                                | [models.PublicProjectListData](../models/public-project-list-data.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [models.EnvelopeMeta](../models/envelope-meta.md)                     | :heavy_check_mark:                                                    | N/A                                                                   |