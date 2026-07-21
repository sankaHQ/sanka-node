# ViewCreateRequest

## Example Usage

```typescript
import { ViewCreateRequest } from "sanka-sdk/models";

let value: ViewCreateRequest = {
  title: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `title`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `objectType`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `customObjectId`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `formViewId`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `visibility`                                                                      | [models.ViewCreateRequestVisibility](../models/view-create-request-visibility.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `mode`                                                                            | [models.ViewCreateRequestMode](../models/view-create-request-mode.md)             | :heavy_minus_sign:                                                                | N/A                                                                               |
| `groupFieldId`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `columnFieldIds`                                                                  | *string*[]                                                                        | :heavy_minus_sign:                                                                | N/A                                                                               |
| `subtotalCalculations`                                                            | [models.ViewSubtotalCalculation](../models/view-subtotal-calculation.md)[]        | :heavy_minus_sign:                                                                | N/A                                                                               |