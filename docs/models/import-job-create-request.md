# ImportJobCreateRequest

## Example Usage

```typescript
import { ImportJobCreateRequest } from "sanka-sdk/models";

let value: ImportJobCreateRequest = {
  objectType: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `objectType`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sourceKind`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `fileFormat`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `fileId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `customObjectId`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `provider`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `channelId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `recordIds`                                                            | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `sourceRecord`                                                         | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |
| `operation`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `mappingMode`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `keyField`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `relationKeyMap`                                                       | Record<string, *string*>                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `columnMappings`                                                       | [models.TransferColumnMapping](../models/transfer-column-mapping.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `dryRun`                                                               | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |