# UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchRequest

## Example Usage

```typescript
import { UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchRequest = {
    pipelineId: "<id>",
    body: {},
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pipelineId`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.DealPipelineUpdateRequest](../../models/deal-pipeline-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |