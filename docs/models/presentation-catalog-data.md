# PresentationCatalogData

## Example Usage

```typescript
import { PresentationCatalogData } from "sanka-sdk/models";

let value: PresentationCatalogData = {
  schemaVersions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pageSizes: [
    {},
    {},
  ],
  layouts: [],
  blocks: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
  accents: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
    },
  ],
  themes: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
  icons: [],
  limits: {
    "key": 247928,
    "key1": 479139,
    "key2": 493349,
  },
  guidance: [],
  deckJsonSchema: {
    "key": "<value>",
  },
  example: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `schemaVersions`                         | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `pageSizes`                              | Record<string, *any*>[]                  | :heavy_check_mark:                       | N/A                                      |
| `layouts`                                | Record<string, *any*>[]                  | :heavy_check_mark:                       | N/A                                      |
| `blocks`                                 | Record<string, *any*>[]                  | :heavy_check_mark:                       | N/A                                      |
| `accents`                                | Record<string, *any*>[]                  | :heavy_check_mark:                       | N/A                                      |
| `themes`                                 | Record<string, *any*>[]                  | :heavy_check_mark:                       | N/A                                      |
| `icons`                                  | *string*[]                               | :heavy_check_mark:                       | Lucide icon names allowed in card items. |
| `limits`                                 | Record<string, *number*>                 | :heavy_check_mark:                       | N/A                                      |
| `guidance`                               | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `deckJsonSchema`                         | Record<string, *any*>                    | :heavy_check_mark:                       | N/A                                      |
| `example`                                | Record<string, *any*>                    | :heavy_check_mark:                       | N/A                                      |