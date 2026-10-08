# CreatePublicProgramPresentationResponse

## Example Usage

```typescript
import { CreatePublicProgramPresentationResponse } from "sanka-sdk/models/operations";

let value: CreatePublicProgramPresentationResponse = {
  headers: {},
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
| `result`                                                                                                            | [models.CreatePublicProgramPresentation201Envelope](../../models/create-public-program-presentation201-envelope.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |