# BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost200Envelope

## Example Usage

```typescript
import {
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost200Envelope,
} from "sanka-sdk/models";

let value:
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost200Envelope =
    {
      success: true,
      data: {
        program: {
          id: "<id>",
          workspaceId: "<id>",
          templateSlug: "<value>",
          status: "completed",
          name: "<value>",
        },
        createdCount: 125222,
        updatedCount: 71353,
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `success`                                                                                   | *true*                                                                                      | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `data`                                                                                      | [models.FerryProgramTodoBatchUpsertData](../models/ferry-program-todo-batch-upsert-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `meta`                                                                                      | [models.EnvelopeMeta](../models/envelope-meta.md)                                           | :heavy_check_mark:                                                                          | N/A                                                                                         |