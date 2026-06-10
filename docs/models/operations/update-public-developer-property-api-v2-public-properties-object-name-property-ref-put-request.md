# UpdatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefPutRequest

## Example Usage

```typescript
import {
  UpdatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefPutRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefPutRequest =
    {
      objectName: "<value>",
      propertyRef: "<value>",
      body: {},
    };
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `objectName`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `propertyRef`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `workspaceId`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `xWorkspaceCode`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `body`                                                                                   | [models.PublicPropertyMutationRequest](../../models/public-property-mutation-request.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |