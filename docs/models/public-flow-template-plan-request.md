# PublicFlowTemplatePlanRequest

## Example Usage

```typescript
import { PublicFlowTemplatePlanRequest } from "sanka-sdk/models";

let value: PublicFlowTemplatePlanRequest = {
  requestId: "e3167fec-1fd5-474e-baeb-9ce14f01ce99",
  templateId: "<id>",
  templateVersion: 210158,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `requestId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `templateId`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `templateVersion`                                                | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `parameters`                                                     | Record<string, *models.PublicFlowTemplatePlanRequestParameters*> | :heavy_minus_sign:                                               | N/A                                                              |
| `workflowId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `expectedDefinitionDigest`                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |