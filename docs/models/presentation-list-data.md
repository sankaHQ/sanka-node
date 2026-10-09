# PresentationListData

## Example Usage

```typescript
import { PresentationListData } from "sanka-sdk/models";

let value: PresentationListData = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `presentations`                                                            | [models.PresentationSummaryData](../models/presentation-summary-data.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `nextCursor`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Pass as `cursor` for the next page; null on the last page.                 |