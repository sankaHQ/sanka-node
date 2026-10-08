# CreatePublicPresentation201Envelope

## Example Usage

```typescript
import { CreatePublicPresentation201Envelope } from "sanka-sdk/models";

let value: CreatePublicPresentation201Envelope = {
  success: true,
  data: {
    id: "<id>",
    workspaceId: "<id>",
    product: "flow",
    title: "<value>",
    revision: 358372,
    deck: {
      slides: [],
    },
    slideCount: 451670,
    outline: "<value>",
    updatedVia: "mcp",
    appPath: "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `success`                                                 | *true*                                                    | :heavy_check_mark:                                        | N/A                                                       |
| `data`                                                    | [models.PresentationData](../models/presentation-data.md) | :heavy_check_mark:                                        | N/A                                                       |
| `meta`                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)         | :heavy_check_mark:                                        | N/A                                                       |