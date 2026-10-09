# UploadPublicProgramPresentationImageResponse

## Example Usage

```typescript
import { UploadPublicProgramPresentationImageResponse } from "sanka-sdk/models/operations";

let value: UploadPublicProgramPresentationImageResponse = {
  headers: {},
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
| `result`                                                                                                                       | [models.UploadPublicProgramPresentationImage201Envelope](../../models/upload-public-program-presentation-image201-envelope.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |