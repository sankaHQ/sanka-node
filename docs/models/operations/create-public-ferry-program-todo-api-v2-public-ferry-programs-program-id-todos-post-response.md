# CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostResponse

## Example Usage

```typescript
import { CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostResponse } from "sanka-sdk/models/operations";

let value:
  CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
        "key2": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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

| Field                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                          | N/A                                                                                                                                                                                                         |
| `result`                                                                                                                                                                                                    | [models.CreatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost200Envelope](../../models/create-public-ferry-program-todo-api-v2-public-ferry-programs-program-id-todos-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                          | N/A                                                                                                                                                                                                         |