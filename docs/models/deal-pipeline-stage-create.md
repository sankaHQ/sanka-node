# DealPipelineStageCreate

## Example Usage

```typescript
import { DealPipelineStageCreate } from "sanka-sdk/models";

let value: DealPipelineStageCreate = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `internalValue`                                                                                                                   | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Value stored on Deals in this stage. Derived from the name when omitted; normalized to lowercase letters, digits and underscores. |
| `score`                                                                                                                           | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `isDefault`                                                                                                                       | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | Exactly one stage is the default. The first stage is used when none is.                                                           |
| `isHidden`                                                                                                                        | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |