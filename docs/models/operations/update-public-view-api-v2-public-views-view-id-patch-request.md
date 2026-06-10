# UpdatePublicViewApiV2PublicViewsViewIdPatchRequest

## Example Usage

```typescript
import { UpdatePublicViewApiV2PublicViewsViewIdPatchRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicViewApiV2PublicViewsViewIdPatchRequest = {
  viewId: "<id>",
  body: {},
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `viewId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `language`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `workspaceId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `xWorkspaceCode`                                                | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.ViewUpdateRequest](../../models/view-update-request.md) | :heavy_check_mark:                                              | N/A                                                             |