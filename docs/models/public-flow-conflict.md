# PublicFlowConflict

## Example Usage

```typescript
import { PublicFlowConflict } from "sanka-sdk/models";

let value: PublicFlowConflict = {
  key: "<key>",
  previous: {
    present: true,
  },
  current: {
    present: true,
  },
  desired: {
    present: true,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `key`                                                               | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `previous`                                                          | [models.PublicFlowFieldState](../models/public-flow-field-state.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `current`                                                           | [models.PublicFlowFieldState](../models/public-flow-field-state.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `desired`                                                           | [models.PublicFlowFieldState](../models/public-flow-field-state.md) | :heavy_check_mark:                                                  | N/A                                                                 |