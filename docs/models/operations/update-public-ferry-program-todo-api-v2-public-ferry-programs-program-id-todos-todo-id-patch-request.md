# UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchRequest

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchRequest =
    {
      programId: "<id>",
      todoId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `programId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `todoId`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `workspaceId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `xWorkspaceCode`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.FerryProgramTodoUpdateRequest](../../models/ferry-program-todo-update-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |