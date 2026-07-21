# BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostRequest

## Example Usage

```typescript
import {
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostRequest,
} from "sanka-sdk/models/operations";

let value:
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostRequest =
    {
      programId: "<id>",
      body: {
        todos: [],
      },
    };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `programId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `xWorkspaceCode`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `body`                                                                                               | [models.FerryProgramTodoBatchUpsertRequest](../../models/ferry-program-todo-batch-upsert-request.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |