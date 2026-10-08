# ListPublicProgramPresentationsResponse

## Example Usage

```typescript
import { ListPublicProgramPresentationsResponse } from "sanka-sdk/models/operations";

let value: ListPublicProgramPresentationsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [models.ListPublicProgramPresentations200Envelope](../../models/list-public-program-presentations200-envelope.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |