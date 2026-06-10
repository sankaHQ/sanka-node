# DeletePublicAssociationApiV2PublicAssociationsDeleteRequest

## Example Usage

```typescript
import { DeletePublicAssociationApiV2PublicAssociationsDeleteRequest } from "sanka-sdk/models/operations";

let value: DeletePublicAssociationApiV2PublicAssociationsDeleteRequest = {
  body: {
    sourceRef: {
      objectType: "<value>",
      recordId: "<id>",
    },
    targetRef: {
      objectType: "<value>",
      recordId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `xWorkspaceCode`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `body`                                                                                         | [models.PublicAssociationMutationRequest](../../models/public-association-mutation-request.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |