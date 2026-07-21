# UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch200Envelope

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch200Envelope,
} from "sanka-sdk/models";

let value:
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch200Envelope =
    {
      success: true,
      data: {
        id: "<id>",
        workspaceId: "<id>",
        templateSlug: "<value>",
        status: "completed",
        name: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.FerryProgramData](../models/ferry-program-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |