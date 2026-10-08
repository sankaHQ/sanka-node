# CreatePublicProgramPresentationExportRequest

## Example Usage

```typescript
import { CreatePublicProgramPresentationExportRequest } from "sanka-sdk/models/operations";

let value: CreatePublicProgramPresentationExportRequest = {
  programId: "<id>",
  presentationId: "<id>",
  body: {
    format: "pdf",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `programId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `presentationId`                                                                | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `workspaceId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `idempotencyKey`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `xWorkspaceCode`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `body`                                                                          | [models.PresentationExportRequest](../../models/presentation-export-request.md) | :heavy_check_mark:                                                              | N/A                                                                             |