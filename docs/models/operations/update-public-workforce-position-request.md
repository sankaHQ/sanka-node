# UpdatePublicWorkforcePositionRequest

## Example Usage

```typescript
import { UpdatePublicWorkforcePositionRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicWorkforcePositionRequest = {
  positionId: "4c90f564-611c-472c-aa3c-151bb6cefb26",
  body: {
    expectedVersion: 711663,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `positionId`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `xWorkspaceCode`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `body`                                                                  | [models.PositionUpdateRequest](../../models/position-update-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |