# PublicWorkflowConditionGroupResponse

## Example Usage

```typescript
import { PublicWorkflowConditionGroupResponse } from "sanka-sdk/models";

let value: PublicWorkflowConditionGroupResponse = {
  id: "<id>",
  operator: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `operator`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `parentGroupId`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `conditions`                                                                                | [models.PublicWorkflowConditionResponse](../models/public-workflow-condition-response.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |