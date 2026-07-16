# UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchResponse

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatchResponse =
    {
      headers: {
        "key": [
          "<value 1>",
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

| Field                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                         |
| `result`                                                                                                                                                                                                                    | [models.UpdatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch200Envelope](../../models/update-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-todo-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                         |