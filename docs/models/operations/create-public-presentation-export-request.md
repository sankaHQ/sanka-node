# CreatePublicPresentationExportRequest

## Example Usage

```typescript
import { CreatePublicPresentationExportRequest } from "sanka-sdk/models/operations";

let value: CreatePublicPresentationExportRequest = {
  presentationId: "<id>",
  body: {
    format: "pdf",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `presentationId`                                                                | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `workspaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `idempotencyKey`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `xWorkspaceCode`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `body`                                                                          | [models.PresentationExportRequest](../../models/presentation-export-request.md) | :heavy_check_mark:                                                              | N/A                                                                             |