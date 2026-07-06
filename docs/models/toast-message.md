# ToastMessage

## Example Usage

```typescript
import { ToastMessage } from "sanka-sdk/models";

let value: ToastMessage = {
  variant: "info",
  code: "<value>",
  message: "<value>",
  i18n: {
    en: "<value>",
    ja: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `variant`                                                  | [models.Variant](../models/variant.md)                     | :heavy_check_mark:                                         | N/A                                                        |
| `code`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `i18n`                                                     | [models.ToastMessageI18n](../models/toast-message-i18n.md) | :heavy_check_mark:                                         | N/A                                                        |