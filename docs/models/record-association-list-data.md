# RecordAssociationListData

## Example Usage

```typescript
import { RecordAssociationListData } from "sanka-sdk/models";

let value: RecordAssociationListData = {
  recordRef: {
    objectType: "<value>",
    recordId: "<id>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `recordRef`                                               | [models.RecordRef](../models/record-ref.md)               | :heavy_check_mark:                                        | N/A                                                       |
| `items`                                                   | [models.AssociationEdge](../models/association-edge.md)[] | :heavy_minus_sign:                                        | N/A                                                       |
| `page`                                                    | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `pageSize`                                                | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `total`                                                   | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `meta`                                                    | Record<string, *any*>                                     | :heavy_minus_sign:                                        | N/A                                                       |