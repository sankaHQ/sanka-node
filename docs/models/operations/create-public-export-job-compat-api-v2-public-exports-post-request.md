# CreatePublicExportJobCompatApiV2PublicExportsPostRequest

## Example Usage

```typescript
import { CreatePublicExportJobCompatApiV2PublicExportsPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicExportJobCompatApiV2PublicExportsPostRequest = {
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
| `body`                                                                     | [models.ExportJobCreateRequest](../../models/export-job-create-request.md) | :heavy_check_mark:                                                         | N/A                                                                        |