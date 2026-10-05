# SearchFilterExpression

## Example Usage

```typescript
import { SearchFilterExpression } from "sanka-sdk/models";

let value: SearchFilterExpression = {
  field: {
    fieldId: "<id>",
  },
  operator: "starts_with",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `field`                                               | [models.FieldReference](../models/field-reference.md) | :heavy_check_mark:                                    | N/A                                                   |
| `operator`                                            | [models.Operator](../models/operator.md)              | :heavy_check_mark:                                    | N/A                                                   |
| `value`                                               | *any*                                                 | :heavy_minus_sign:                                    | N/A                                                   |
| `selectedLabel`                                       | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |