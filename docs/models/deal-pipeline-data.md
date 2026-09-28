# DealPipelineData

## Example Usage

```typescript
import { DealPipelineData } from "sanka-sdk/models";

let value: DealPipelineData = {
  id: "<id>",
  name: "<value>",
  internalName: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `internalName`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `isDefault`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `order`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `stages`                                                                | [models.DealPipelineStageData](../models/deal-pipeline-stage-data.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |