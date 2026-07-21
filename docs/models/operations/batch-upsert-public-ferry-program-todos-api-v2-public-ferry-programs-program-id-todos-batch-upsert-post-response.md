# BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostResponse

## Example Usage

```typescript
import {
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostResponse,
} from "sanka-sdk/models/operations";

let value:
  BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPostResponse =
    {
      headers: {
        "key": [],
        "key1": [],
      },
      result: {
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
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                                                         | [models.BatchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost200Envelope](../../models/batch-upsert-public-ferry-program-todos-api-v2-public-ferry-programs-program-id-todos-batch-upsert-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              |