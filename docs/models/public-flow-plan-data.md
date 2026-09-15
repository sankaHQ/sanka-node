# PublicFlowPlanData

## Example Usage

```typescript
import { PublicFlowPlanData } from "sanka-sdk/models";

let value: PublicFlowPlanData = {
  workspaceId: "95cd925f-ded0-4da1-9ade-888a593af018",
  requestId: "edaa8a42-7c57-46bb-a6be-d1cbd325f02a",
  planDigest: "<value>",
  templateId: "<id>",
  templateVersion: 488746,
  operation: "update",
  applicable: true,
  parameters: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `requestId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `workflowId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `planDigest`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `templateId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `templateVersion`                                                                  | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `operation`                                                                        | [models.PublicFlowPlanDataOperation](../models/public-flow-plan-data-operation.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `applicable`                                                                       | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `parameters`                                                                       | Record<string, *models.PublicFlowPlanDataParameters*>                              | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changes`                                                                          | [models.PublicFlowFieldChange](../models/public-flow-field-change.md)[]            | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `conflicts`                                                                        | [models.PublicFlowConflict](../models/public-flow-conflict.md)[]                   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `preservedFields`                                                                  | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `blockerCodes`                                                                     | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `requiredCapabilities`                                                             | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `construction`                                                                     | *"inactive"*                                                                       | :heavy_minus_sign:                                                                 | N/A                                                                                |