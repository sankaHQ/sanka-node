# GetPublicPresentationCatalogResponse

## Example Usage

```typescript
import { GetPublicPresentationCatalogResponse } from "sanka-sdk/models/operations";

let value: GetPublicPresentationCatalogResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [models.GetPublicPresentationCatalog200Envelope](../../models/get-public-presentation-catalog200-envelope.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |