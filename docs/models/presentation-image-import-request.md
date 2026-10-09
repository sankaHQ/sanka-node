# PresentationImageImportRequest

## Example Usage

```typescript
import { PresentationImageImportRequest } from "sanka-sdk/models";

let value: PresentationImageImportRequest = {
  url: "https://rigid-underneath.net",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | A public https:// image URL (JPEG, PNG or WebP, at most 10 MiB). |
| `alt`                                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |