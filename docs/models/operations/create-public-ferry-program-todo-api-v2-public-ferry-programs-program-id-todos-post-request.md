# CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostRequest

## Example Usage

```typescript
import { CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostRequest } from "sanka-sdk/models/operations";

let value:
  CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostRequest =
    {
      programId: "<id>",
      body: {
        title: "<value>",
      },
    };
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `programId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `workspaceId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `xWorkspaceCode`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.FerryProgramTodoCreateRequest](../../models/ferry-program-todo-create-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |