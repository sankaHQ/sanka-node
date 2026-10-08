# UpdatePublicProgramPresentationResponse

## Example Usage

```typescript
import { UpdatePublicProgramPresentationResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicProgramPresentationResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
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

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [models.UpdatePublicProgramPresentation200Envelope](../../models/update-public-program-presentation200-envelope.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |