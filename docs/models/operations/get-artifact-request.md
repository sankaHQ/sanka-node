# GetArtifactRequest

## Example Usage

```typescript
import { GetArtifactRequest } from "sanka-sdk/models/operations";

let value: GetArtifactRequest = {
  runId: "72285abd-fbf2-49bc-9f50-d10f6dfbe0d3",
  name: "output.zip",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `runId`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `name`                                             | [operations.Name](../../models/operations/name.md) | :heavy_check_mark:                                 | N/A                                                |
| `workspaceId`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `xWorkspaceCode`                                   | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |