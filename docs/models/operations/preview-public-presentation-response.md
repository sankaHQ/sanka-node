# PreviewPublicPresentationResponse

## Example Usage

```typescript
import { PreviewPublicPresentationResponse } from "sanka-sdk/models/operations";

let value: PreviewPublicPresentationResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      revision: 1222,
      slides: [
        {
          slideId: "<id>",
          index: 937191,
          image: {
            contentType: "<value>",
            base64: "<value>",
          },
          fit: {},
        },
      ],
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [models.PreviewPublicPresentation200Envelope](../../models/preview-public-presentation200-envelope.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |