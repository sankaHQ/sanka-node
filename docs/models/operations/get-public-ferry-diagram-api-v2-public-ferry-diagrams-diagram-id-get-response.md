# GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGetResponse

## Example Usage

```typescript
import { GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
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

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `result`                                                                                                                                                                        | [models.GetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet200Envelope](../../models/get-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |