# ObjectRecordData

## Example Usage

```typescript
import { ObjectRecordData } from "sanka-sdk/models";

let value: ObjectRecordData = {
  id: "<id>",
  recordId: "<id>",
  objectType: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `recordId`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `objectType`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `customObjectId`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `properties`                                                                                | Record<string, *any*>                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `displayProperties`                                                                         | Record<string, [models.ObjectRecordDisplayValue](../models/object-record-display-value.md)> | :heavy_minus_sign:                                                                          | N/A                                                                                         |