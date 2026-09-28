# UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchResponse

## Example Usage

```typescript
import { UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchResponse } from "sanka-sdk/models/operations";

let value:
  UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatchResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [],
    },
    result: {
      success: true,
      data: {
        id: "<id>",
        name: "<value>",
        internalName: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |
| `result`                                                                                                                                                                                      | [models.UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatch200Envelope](../../models/update-public-deal-pipeline-api-v2-public-deals-pipelines-pipeline-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |