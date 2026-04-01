# PublicReportMetadataRequest

## Example Usage

```typescript
import { PublicReportMetadataRequest } from "sanka-sdk/models";

let value: PublicReportMetadataRequest = {
  name: "<value>",
  reportType: {
    type: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportType`                                                                  | [models.PublicReportTypeSchema](../models/public-report-type-schema.md)       | :heavy_check_mark:                                                            | N/A                                                                           |
| `reportFormat`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportFilters`                                                               | [models.PublicReportFiltersSchema](../models/public-report-filters-schema.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `detailColumns`                                                               | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `groupingsDown`                                                               | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `groupingsAcross`                                                             | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |