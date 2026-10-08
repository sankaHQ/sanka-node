# UpdatePublicProgramPresentationRequest

## Example Usage

```typescript
import { UpdatePublicProgramPresentationRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicProgramPresentationRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    expectedRevision: 896900,
    ops: [
      {
        op: "update_block",
        slideId: "<id>",
        blockId: "<id>",
        set: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `programId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `presentationId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `workspaceId`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `xWorkspaceCode`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `body`                                                                        | [models.PresentationPatchRequest](../../models/presentation-patch-request.md) | :heavy_check_mark:                                                            | N/A                                                                           |