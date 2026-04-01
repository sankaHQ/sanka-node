# TicketPipelineSchema

## Example Usage

```typescript
import { TicketPipelineSchema } from "sanka-sdk/models";

let value: TicketPipelineSchema = {
  name: "<value>",
  internalName: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `internalName`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `isDefault`                                                                     | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `order`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `stages`                                                                        | [models.TicketPipelineStageSchema](../models/ticket-pipeline-stage-schema.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |