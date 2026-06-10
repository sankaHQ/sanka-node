# CreatePublicViewApiV2PublicViewsPostRequest

## Example Usage

```typescript
import { CreatePublicViewApiV2PublicViewsPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicViewApiV2PublicViewsPostRequest = {
  body: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `language`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `workspaceId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `xWorkspaceCode`                                                | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.ViewCreateRequest](../../models/view-create-request.md) | :heavy_check_mark:                                              | N/A                                                             |