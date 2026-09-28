# DealPipelineStageUpdate

## Example Usage

```typescript
import { DealPipelineStageUpdate } from "sanka-sdk/models";

let value: DealPipelineStageUpdate = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Existing stage id. Omit it to add a new stage at this position.                                       |
| `name`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Required for a new stage; an existing stage keeps its name when omitted.                              |
| `internalValue`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | An existing stage keeps its value when omitted. Changing it moves the stage's Deals to the new value. |
| `score`                                                                                               | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `isDefault`                                                                                           | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Set true on one stage to make it the default. Omit it everywhere to keep the current default stage.   |
| `isHidden`                                                                                            | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |