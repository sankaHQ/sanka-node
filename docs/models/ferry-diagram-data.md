# FerryDiagramData

## Example Usage

```typescript
import { FerryDiagramData } from "sanka-sdk/models";

let value: FerryDiagramData = {
  name: "<value>",
  id: "<id>",
  workspaceId: "<id>",
  revision: 238415,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nodes`                                                                                       | [models.FerryDiagramNode](../models/ferry-diagram-node.md)[]                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `edges`                                                                                       | [models.FerryDiagramEdge](../models/ferry-diagram-edge.md)[]                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `viewport`                                                                                    | [models.FerryDiagramViewport](../models/ferry-diagram-viewport.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revision`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |