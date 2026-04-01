# PublicUpdateReportMetadataRequest

## Example Usage

```typescript
import { PublicUpdateReportMetadataRequest } from "sanka-sdk/models";

let value: PublicUpdateReportMetadataRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportType`                                                                  | [models.PublicReportTypeSchema](../models/public-report-type-schema.md)       | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportFormat`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportFilters`                                                               | [models.PublicReportFiltersSchema](../models/public-report-filters-schema.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `detailColumns`                                                               | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `groupingsDown`                                                               | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `groupingsAcross`                                                             | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |