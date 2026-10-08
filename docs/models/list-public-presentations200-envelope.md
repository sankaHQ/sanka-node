# ListPublicPresentations200Envelope

## Example Usage

```typescript
import { ListPublicPresentations200Envelope } from "sanka-sdk/models";

let value: ListPublicPresentations200Envelope = {
  success: true,
  data: {
    presentations: [
      {
        id: "<id>",
        product: "sanka",
        title: "<value>",
        revision: 421729,
        slideCount: 848212,
        pageSize: "a4-landscape",
        themeId: "<id>",
        updatedVia: "app",
        appPath: "<value>",
      },
    ],
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *true*                                                             | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [models.PresentationListData](../models/presentation-list-data.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `meta`                                                             | [models.EnvelopeMeta](../models/envelope-meta.md)                  | :heavy_check_mark:                                                 | N/A                                                                |