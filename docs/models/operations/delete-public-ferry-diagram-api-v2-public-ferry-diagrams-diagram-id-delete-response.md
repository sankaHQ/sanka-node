# DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDeleteResponse } from "sanka-sdk/models/operations";

let value:
  DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDeleteResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key1": [
        "<value 1>",
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
        deleted: false,
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `result`                                                                                                                                                                                    | [models.DeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete200Envelope](../../models/delete-public-ferry-diagram-api-v2-public-ferry-diagrams-diagram-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |