# CreatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePostRequest

## Example Usage

```typescript
import { CreatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePostRequest } from "sanka-sdk/models/operations";

let value:
  CreatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePostRequest = {
    objectName: "<value>",
    body: {},
  };
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `objectName`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workspaceId`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `xWorkspaceCode`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `body`                                                                                   | [models.PublicPropertyMutationRequest](../../models/public-property-mutation-request.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |