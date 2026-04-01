# PublicReportFilterSchema

## Example Usage

```typescript
import { PublicReportFilterSchema } from "sanka-sdk/models";

let value: PublicReportFilterSchema = {
  filterSelect: "<value>",
  filterOperator: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `filterSelect`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filterOperator`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filterSource`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `filterType`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `filterInput`                                                                            | [models.PublicReportFilterInputSchema](../models/public-report-filter-input-schema.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |