# ImportPublicPresentationDiagramImageResponse

## Example Usage

```typescript
import { ImportPublicPresentationDiagramImageResponse } from "sanka-sdk/models/operations";

let value: ImportPublicPresentationDiagramImageResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    success: true,
    data: {
      assetId: "<id>",
      contentType: "<value>",
      sizeBytes: 878932,
      width: 351398,
      height: 831120,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                      | Record<string, *string*[]>                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `result`                                                                                                                       | [models.ImportPublicPresentationDiagramImage201Envelope](../../models/import-public-presentation-diagram-image201-envelope.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |