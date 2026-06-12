# WorkflowDetailData

## Example Usage

```typescript
import { WorkflowDetailData } from "sanka-sdk/models";

let value: WorkflowDetailData = {
  workflow: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workflow`                                                 | [models.WorkflowListItem](../models/workflow-list-item.md) | :heavy_check_mark:                                         | N/A                                                        |
| `permission`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `classifications`                                          | Record<string, *string*>                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |