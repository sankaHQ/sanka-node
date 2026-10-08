# ListPublicProgramPresentationsRequest

## Example Usage

```typescript
import { ListPublicProgramPresentationsRequest } from "sanka-sdk/models/operations";

let value: ListPublicProgramPresentationsRequest = {
  programId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `programId`                             | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `folderId`                              | *string*                                | :heavy_minus_sign:                      | Only presentations in this Docs folder. |
| `cursor`                                | *string*                                | :heavy_minus_sign:                      | `nextCursor` from the previous page.    |
| `limit`                                 | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `includeArchived`                       | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `workspaceId`                           | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `xWorkspaceCode`                        | *string*                                | :heavy_minus_sign:                      | N/A                                     |