# DealPipelineCreateRequest

## Example Usage

```typescript
import { DealPipelineCreateRequest } from "sanka-sdk/models";

let value: DealPipelineCreateRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `isDefault`                                                                 | *boolean*                                                                   | :heavy_minus_sign:                                                          | Make this the workspace's default Deal pipeline.                            |
| `stages`                                                                    | [models.DealPipelineStageCreate](../models/deal-pipeline-stage-create.md)[] | :heavy_minus_sign:                                                          | Ordered stages. When empty the standard default stages are created.         |