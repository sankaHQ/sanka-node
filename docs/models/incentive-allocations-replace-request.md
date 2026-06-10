# IncentiveAllocationsReplaceRequest

## Example Usage

```typescript
import { IncentiveAllocationsReplaceRequest } from "sanka-sdk/models";

let value: IncentiveAllocationsReplaceRequest = {
  sourceObjectType: "<value>",
  sourceRecordId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `sourceObjectType`                                                         | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sourceRecordId`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `allocations`                                                              | [models.IncentiveAllocationLine](../models/incentive-allocation-line.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |