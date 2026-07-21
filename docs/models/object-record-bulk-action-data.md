# ObjectRecordBulkActionData

## Example Usage

```typescript
import { ObjectRecordBulkActionData } from "sanka-sdk/models";

let value: ObjectRecordBulkActionData = {
  operation: "edit",
  objectType: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `operation`                                                                                         | [models.ObjectRecordBulkActionDataOperation](../models/object-record-bulk-action-data-operation.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `objectType`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `ids`                                                                                               | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `affectedIds`                                                                                       | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `failedIds`                                                                                         | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `count`                                                                                             | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `failedCount`                                                                                       | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `queued`                                                                                            | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `backgroundJobId`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `message`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `toast`                                                                                             | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |