# ReplacePublicProgramPresentationResponse

## Example Usage

```typescript
import { ReplacePublicProgramPresentationResponse } from "sanka-sdk/models/operations";

let value: ReplacePublicProgramPresentationResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [models.ReplacePublicProgramPresentation200Envelope](../../models/replace-public-program-presentation200-envelope.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |