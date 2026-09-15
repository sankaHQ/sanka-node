# UsePublicWorkflowTemplateApiV2PublicWorkflowsTemplatesUsePostRequest

## Example Usage

```typescript
import { UsePublicWorkflowTemplateApiV2PublicWorkflowsTemplatesUsePostRequest } from "sanka-sdk/models/operations";

let value:
  UsePublicWorkflowTemplateApiV2PublicWorkflowsTemplatesUsePostRequest = {
    body: {
      requestId: "585042de-975e-4c46-86a9-49a3e27f9895",
      planDigest: "<value>",
    },
  };
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `workspaceId`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `xWorkspaceCode`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [models.PublicFlowTemplateUseRequest](../../models/public-flow-template-use-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |