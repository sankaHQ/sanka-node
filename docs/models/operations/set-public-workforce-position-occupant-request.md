# SetPublicWorkforcePositionOccupantRequest

## Example Usage

```typescript
import { SetPublicWorkforcePositionOccupantRequest } from "sanka-sdk/models/operations";

let value: SetPublicWorkforcePositionOccupantRequest = {
  positionId: "bb545e16-4e91-4519-ab83-b1bbd60bdbde",
  body: {
    expectedVersion: 320782,
    employeeId: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `positionId`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `workspaceId`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `xWorkspaceCode`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `body`                                                                      | [models.PositionOccupantRequest](../../models/position-occupant-request.md) | :heavy_check_mark:                                                          | N/A                                                                         |