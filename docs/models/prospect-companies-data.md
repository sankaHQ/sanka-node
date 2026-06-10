# ProspectCompaniesData

## Example Usage

```typescript
import { ProspectCompaniesData } from "sanka-sdk/models";

let value: ProspectCompaniesData = {
  parsedFilters: {},
  count: 889502,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `query`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `parsedFilters`                                                            | [models.ProspectCompaniesFilters](../models/prospect-companies-filters.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `results`                                                                  | [models.ProspectCompanyData](../models/prospect-company-data.md)[]         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `count`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `providerMeta`                                                             | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |