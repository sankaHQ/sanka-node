# ListPublicFerryDiagramsApiV2PublicFerryDiagramsGetResponse

## Example Usage

```typescript
import { ListPublicFerryDiagramsApiV2PublicFerryDiagramsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicFerryDiagramsApiV2PublicFerryDiagramsGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      diagrams: [
        {
          id: "<id>",
          name: "<value>",
          revision: 623922,
        },
      ],
      count: 489186,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.ListPublicFerryDiagramsApiV2PublicFerryDiagramsGet200Envelope](../../models/list-public-ferry-diagrams-api-v2-public-ferry-diagrams-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |