# FerryProgramTodoBatchUpsertData

## Example Usage

```typescript
import { FerryProgramTodoBatchUpsertData } from "sanka-sdk/models";

let value: FerryProgramTodoBatchUpsertData = {
  program: {
    id: "<id>",
    workspaceId: "<id>",
    templateSlug: "<value>",
    status: "completed",
    name: "<value>",
  },
  createdCount: 824168,
  updatedCount: 685102,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `program`                                                  | [models.FerryProgramData](../models/ferry-program-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `createdCount`                                             | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `updatedCount`                                             | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |