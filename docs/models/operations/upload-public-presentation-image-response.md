# UploadPublicPresentationImageResponse

## Example Usage

```typescript
import { UploadPublicPresentationImageResponse } from "sanka-sdk/models/operations";

let value: UploadPublicPresentationImageResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
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
| `result`                                                                                                        | [models.UploadPublicPresentationImage201Envelope](../../models/upload-public-presentation-image201-envelope.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |