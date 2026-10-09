# ReplacePublicProgramPresentationRequest

## Example Usage

```typescript
import { ReplacePublicProgramPresentationRequest } from "sanka-sdk/models/operations";

let value: ReplacePublicProgramPresentationRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    expectedRevision: 678481,
    deck: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `programId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `presentationId`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `xWorkspaceCode`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.PresentationReplaceRequest](../../models/presentation-replace-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |