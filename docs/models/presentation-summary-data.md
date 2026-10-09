# PresentationSummaryData

A presentation in a list: metadata only, never the deck.

## Example Usage

```typescript
import { PresentationSummaryData } from "sanka-sdk/models";

let value: PresentationSummaryData = {
  id: "<id>",
  product: "flow",
  title: "<value>",
  revision: 76193,
  slideCount: 591518,
  pageSize: "16:9",
  themeId: "<id>",
  updatedVia: "app",
  appPath: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `programId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [models.PresentationSummaryDataProduct](../models/presentation-summary-data-product.md)       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revision`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slideCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | [models.PresentationSummaryDataPagesize](../models/presentation-summary-data-pagesize.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `themeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `folderId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pinned`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `archivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedVia`                                                                                  | [models.PresentationSummaryDataUpdatedvia](../models/presentation-summary-data-updatedvia.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appPath`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |