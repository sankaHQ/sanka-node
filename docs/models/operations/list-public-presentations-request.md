# ListPublicPresentationsRequest

## Example Usage

```typescript
import { ListPublicPresentationsRequest } from "sanka-sdk/models/operations";

let value: ListPublicPresentationsRequest = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `folderId`                              | *string*                                | :heavy_minus_sign:                      | Only presentations in this Docs folder. |
| `cursor`                                | *string*                                | :heavy_minus_sign:                      | `nextCursor` from the previous page.    |
| `limit`                                 | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `includeArchived`                       | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `workspaceId`                           | *string*                                | :heavy_minus_sign:                      | N/A                                     |
| `xWorkspaceCode`                        | *string*                                | :heavy_minus_sign:                      | N/A                                     |