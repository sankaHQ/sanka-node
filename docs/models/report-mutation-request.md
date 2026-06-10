# ReportMutationRequest

## Example Usage

```typescript
import { ReportMutationRequest } from "sanka-sdk/models";

let value: ReportMutationRequest = {
  name: "<value>",
  panelType: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `descriptionJa`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `panelType`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `dataSourceType`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `objectSources`                                                               | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `breakdown`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `xAxis`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `ownerId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `dashboardId`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `updateDashboardAssignment`                                                   | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `isForecast`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `isStackedChart`                                                              | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `isRealtime`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `ratio`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `filter`                                                                      | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | N/A                                                                           |
| `metaData`                                                                    | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | N/A                                                                           |
| `metrics`                                                                     | [models.ReportMetricMutationItem](../models/report-metric-mutation-item.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |
| `advanced`                                                                    | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | N/A                                                                           |