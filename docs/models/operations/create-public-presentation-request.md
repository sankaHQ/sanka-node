# CreatePublicPresentationRequest

## Example Usage

```typescript
import { CreatePublicPresentationRequest } from "sanka-sdk/models/operations";

let value: CreatePublicPresentationRequest = {
  body: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `workspaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `xWorkspaceCode`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `body`                                                                          | [models.PresentationCreateRequest](../../models/presentation-create-request.md) | :heavy_check_mark:                                                              | N/A                                                                             |