# PresentationData

## Example Usage

```typescript
import { PresentationData } from "sanka-sdk/models";

let value: PresentationData = {
  id: "<id>",
  workspaceId: "<id>",
  product: "flow",
  title: "<value>",
  revision: 594247,
  deck: {
    slides: [],
  },
  slideCount: 819253,
  outline: "<value>",
  updatedVia: "mcp",
  appPath: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `programId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [models.PresentationDataProduct](../models/presentation-data-product.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | *"presentation"*                                                                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revision`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deck`                                                                                        | [models.Deck](../models/deck.md)                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slideCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outline`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Read-only Markdown outline derived from the deck.                                             |
| `updatedVia`                                                                                  | [models.PresentationDataUpdatedvia](../models/presentation-data-updatedvia.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceRef`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pinned`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appPath`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | App-relative URL of the Docs page with this presentation open.                                |
| `warnings`                                                                                    | [models.PresentationWarning](../models/presentation-warning.md)[]                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |