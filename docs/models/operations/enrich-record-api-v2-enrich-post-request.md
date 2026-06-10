# EnrichRecordApiV2EnrichPostRequest

## Example Usage

```typescript
import { EnrichRecordApiV2EnrichPostRequest } from "sanka-sdk/models/operations";

let value: EnrichRecordApiV2EnrichPostRequest = {
  body: {
    objectType: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `workspaceId`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `xWorkspaceCode`                                       | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `body`                                                 | [models.EnrichRequest](../../models/enrich-request.md) | :heavy_check_mark:                                     | N/A                                                    |