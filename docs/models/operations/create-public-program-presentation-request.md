# CreatePublicProgramPresentationRequest

## Example Usage

```typescript
import { CreatePublicProgramPresentationRequest } from "sanka-sdk/models/operations";

let value: CreatePublicProgramPresentationRequest = {
  programId: "<id>",
  body: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `programId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `workspaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `xWorkspaceCode`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `body`                                                                          | [models.PresentationCreateRequest](../../models/presentation-create-request.md) | :heavy_check_mark:                                                              | N/A                                                                             |