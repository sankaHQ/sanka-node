# PublicFlowStateData

## Example Usage

```typescript
import { PublicFlowStateData } from "sanka-sdk/models";

let value: PublicFlowStateData = {
  workspaceId: "f1819778-0e1e-4c72-bb24-0f8c636b1a2b",
  workflowId: "907ff4ac-4fcc-400b-a1bb-438800fb3cb3",
  status: "unmanaged",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `workspaceId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `workflowId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [models.PublicFlowStateDataStatus](../models/public-flow-state-data-status.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `definitionDigest`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `active`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `parameters`                                                                   | Record<string, *models.PublicFlowStateDataParameters*>                         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `templateParameters`                                                           | Record<string, *models.TemplateParameters*>                                    | :heavy_minus_sign:                                                             | N/A                                                                            |
| `availableOperations`                                                          | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |