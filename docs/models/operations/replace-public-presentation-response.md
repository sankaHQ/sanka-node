# ReplacePublicPresentationResponse

## Example Usage

```typescript
import { ReplacePublicPresentationResponse } from "sanka-sdk/models/operations";

let value: ReplacePublicPresentationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [models.ReplacePublicPresentation200Envelope](../../models/replace-public-presentation200-envelope.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |