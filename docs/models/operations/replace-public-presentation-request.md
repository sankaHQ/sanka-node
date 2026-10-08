# ReplacePublicPresentationRequest

## Example Usage

```typescript
import { ReplacePublicPresentationRequest } from "sanka-sdk/models/operations";

let value: ReplacePublicPresentationRequest = {
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
| `presentationId`                                                                  | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `xWorkspaceCode`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.PresentationReplaceRequest](../../models/presentation-replace-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |