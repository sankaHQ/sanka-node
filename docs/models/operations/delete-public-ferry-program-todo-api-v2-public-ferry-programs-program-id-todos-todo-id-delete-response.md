# DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDeleteResponse

## Example Usage

```typescript
import {
  DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDeleteResponse,
} from "sanka-sdk/models/operations";

let value:
  DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDeleteResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
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
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |
| `result`                                                                                                                                                                                                                      | [models.DeletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete200Envelope](../../models/delete-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |