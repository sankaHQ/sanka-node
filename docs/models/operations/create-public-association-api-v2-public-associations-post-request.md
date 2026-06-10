# CreatePublicAssociationApiV2PublicAssociationsPostRequest

## Example Usage

```typescript
import { CreatePublicAssociationApiV2PublicAssociationsPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicAssociationApiV2PublicAssociationsPostRequest = {
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