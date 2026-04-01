# EnrichRequest

## Example Usage

```typescript
import { EnrichRequest } from "sanka-sdk/models";

let value: EnrichRequest = {
  objectType: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `objectType`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recordId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `seed`                                                       | [models.EnrichCompanySeed](../models/enrich-company-seed.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `customFieldMap`                                             | Record<string, *string*>                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `dryRun`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `forceRefresh`                                               | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |