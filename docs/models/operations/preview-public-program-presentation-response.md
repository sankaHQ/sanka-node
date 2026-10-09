# PreviewPublicProgramPresentationResponse

## Example Usage

```typescript
import { PreviewPublicProgramPresentationResponse } from "sanka-sdk/models/operations";

let value: PreviewPublicProgramPresentationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [models.PreviewPublicProgramPresentation200Envelope](../../models/preview-public-program-presentation200-envelope.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |