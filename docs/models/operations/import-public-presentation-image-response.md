# ImportPublicPresentationImageResponse

## Example Usage

```typescript
import { ImportPublicPresentationImageResponse } from "sanka-sdk/models/operations";

let value: ImportPublicPresentationImageResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
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

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [models.ImportPublicPresentationImage201Envelope](../../models/import-public-presentation-image201-envelope.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |