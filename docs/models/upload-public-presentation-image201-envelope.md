# UploadPublicPresentationImage201Envelope

## Example Usage

```typescript
import { UploadPublicPresentationImage201Envelope } from "sanka-sdk/models";

let value: UploadPublicPresentationImage201Envelope = {
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
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *true*                                                                            | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.PresentationImageData](../models/presentation-image-data.md)              | :heavy_check_mark:                                                                | An image stored with the presentation; use `assetId` in image blocks and accents. |
| `meta`                                                                            | [models.EnvelopeMeta](../models/envelope-meta.md)                                 | :heavy_check_mark:                                                                | N/A                                                                               |