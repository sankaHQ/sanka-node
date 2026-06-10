# CreatePublicImportJobCompatApiV2PublicImportsPostRequest

## Example Usage

```typescript
import { CreatePublicImportJobCompatApiV2PublicImportsPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicImportJobCompatApiV2PublicImportsPostRequest = {
  body: {
    objectType: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `workspaceId`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `xWorkspaceCode`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `body`                                                                     | [models.ImportJobCreateRequest](../../models/import-job-create-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |