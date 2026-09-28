# UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatch200Envelope

## Example Usage

```typescript
import { UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatch200Envelope } from "sanka-sdk/models";

let value:
  UpdatePublicDealPipelineApiV2PublicDealsPipelinesPipelineIdPatch200Envelope =
    {
      success: true,
      data: {
        id: "<id>",
        name: "<value>",
        internalName: "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.DealPipelineData](../models/deal-pipeline-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |