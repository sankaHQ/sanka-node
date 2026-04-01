# PublicWorkflowRequest

## Example Usage

```typescript
import { PublicWorkflowRequest } from "sanka-sdk/models";

let value: PublicWorkflowRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `externalId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `status`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `triggerType`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `triggerEvery`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `isTriggerActive`                                              | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `nodes`                                                        | [models.WorkflowNodeInput](../models/workflow-node-input.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `config`                                                       | Record<string, *any*>                                          | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `additionalProperties`                                         | Record<string, *any*>                                          | :heavy_minus_sign:                                             | N/A                                                            |