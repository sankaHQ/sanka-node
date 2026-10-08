# PresentationImageData

An image stored with the presentation; use `assetId` in image blocks and accents.

## Example Usage

```typescript
import { PresentationImageData } from "sanka-sdk/models";

let value: PresentationImageData = {
  assetId: "<id>",
  contentType: "<value>",
  sizeBytes: 626178,
  width: 817575,
  height: 507201,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `assetId`          | *string*           | :heavy_check_mark: | N/A                |
| `contentType`      | *string*           | :heavy_check_mark: | N/A                |
| `sizeBytes`        | *number*           | :heavy_check_mark: | N/A                |
| `width`            | *number*           | :heavy_check_mark: | N/A                |
| `height`           | *number*           | :heavy_check_mark: | N/A                |
| `alt`              | *string*           | :heavy_minus_sign: | N/A                |