# DealPipelineStageRemoval

## Example Usage

```typescript
import { DealPipelineStageRemoval } from "sanka-sdk/models";

let value: DealPipelineStageRemoval = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `replacementStageId`                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Kept stage of the same pipeline that receives this stage's Deals. Required when Deals use the removed stage. |