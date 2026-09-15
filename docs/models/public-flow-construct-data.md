# PublicFlowConstructData

## Example Usage

```typescript
import { PublicFlowConstructData } from "sanka-sdk/models";

let value: PublicFlowConstructData = {
  workspaceId: "5db720ff-396c-471c-b0f9-dbce80637a78",
  workflowId: "0cbb20f9-5790-4f13-8bde-d1e20d0d11a1",
  requestId: "68f667bc-4062-47c8-a495-9d38f65c50bd",
  planDigest: "<value>",
  definitionDigest: "<value>",
  status: "constructed",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workflowId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `planDigest`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `definitionDigest`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [models.PublicFlowConstructDataStatus](../models/public-flow-construct-data-status.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |