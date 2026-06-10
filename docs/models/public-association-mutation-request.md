# PublicAssociationMutationRequest

## Example Usage

```typescript
import { PublicAssociationMutationRequest } from "sanka-sdk/models";

let value: PublicAssociationMutationRequest = {
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
| `sourceRef`                                 | [models.RecordRef](../models/record-ref.md) | :heavy_check_mark:                          | N/A                                         |
| `targetRef`                                 | [models.RecordRef](../models/record-ref.md) | :heavy_check_mark:                          | N/A                                         |
| `definitionId`                              | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `label`                                     | *string*                                    | :heavy_minus_sign:                          | N/A                                         |
| `idempotencyKey`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |