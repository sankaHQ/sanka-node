# GetPublicPresentationCatalog200Envelope

## Example Usage

```typescript
import { GetPublicPresentationCatalog200Envelope } from "sanka-sdk/models";

let value: GetPublicPresentationCatalog200Envelope = {
  success: true,
  data: {
    schemaVersions: [],
    pageSizes: [],
    layouts: [
      {
        "key": "<value>",
      },
      {
        "key": "<value>",
      },
      {},
    ],
    blocks: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
      },
    ],
    accents: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
    ],
    themes: [
      {},
    ],
    icons: [],
    limits: {},
    guidance: [],
    deckJsonSchema: {
      "key": "<value>",
      "key1": "<value>",
    },
    example: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *true*                                                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PresentationCatalogData](../models/presentation-catalog-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `meta`                                                                   | [models.EnvelopeMeta](../models/envelope-meta.md)                        | :heavy_check_mark:                                                       | N/A                                                                      |