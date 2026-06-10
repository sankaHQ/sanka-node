# AssociationEdge

## Example Usage

```typescript
import { AssociationEdge } from "sanka-sdk/models";

let value: AssociationEdge = {
  id: "<id>",
  workspaceId: "<id>",
  definitionId: "<id>",
  sourceRef: {
    objectType: "<value>",
    recordId: "<id>",
  },
  targetRef: {
    objectType: "<value>",
    recordId: "<id>",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `workspaceId`                               | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `definitionId`                              | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `sourceRef`                                 | [models.RecordRef](../models/record-ref.md) | :heavy_check_mark:                          | N/A                                         |
| `targetRef`                                 | [models.RecordRef](../models/record-ref.md) | :heavy_check_mark:                          | N/A                                         |
| `direction`                                 | [models.Direction](../models/direction.md)  | :heavy_minus_sign:                          | N/A                                         |
| `label`                                     | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `displayLabel`                              | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `reverseLabel`                              | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `isDefaultDefinition`                       | *boolean*                                   | :heavy_minus_sign:                          | N/A                                         |
| `createdBy`                                 | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `createdAt`                                 | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `deletedAt`                                 | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `meta`                                      | Record<string, *any*>                       | :heavy_minus_sign:                          | N/A                                         |