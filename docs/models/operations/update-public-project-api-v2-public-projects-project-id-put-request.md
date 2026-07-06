# UpdatePublicProjectApiV2PublicProjectsProjectIdPutRequest

## Example Usage

```typescript
import { UpdatePublicProjectApiV2PublicProjectsProjectIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicProjectApiV2PublicProjectsProjectIdPutRequest = {
  projectId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `xWorkspaceCode`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `xLanguage`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `acceptLanguage`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `body`                                                                | [models.PublicProjectRequest](../../models/public-project-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |