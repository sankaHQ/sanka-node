# CreatePublicWorkforcePositionRequest

## Example Usage

```typescript
import { CreatePublicWorkforcePositionRequest } from "sanka-sdk/models/operations";

let value: CreatePublicWorkforcePositionRequest = {
  body: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `xWorkspaceCode`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `body`                                                                  | [models.PositionCreateRequest](../../models/position-create-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |