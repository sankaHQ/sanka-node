# CreatePublicFerryDiagramApiV2PublicFerryDiagramsPostResponse

## Example Usage

```typescript
import { CreatePublicFerryDiagramApiV2PublicFerryDiagramsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicFerryDiagramApiV2PublicFerryDiagramsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      name: "<value>",
      id: "<id>",
      workspaceId: "<id>",
      revision: 798517,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `result`                                                                                                                                                            | [models.CreatePublicFerryDiagramApiV2PublicFerryDiagramsPost200Envelope](../../models/create-public-ferry-diagram-api-v2-public-ferry-diagrams-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |