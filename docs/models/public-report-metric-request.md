# PublicReportMetricRequest

## Example Usage

```typescript
import { PublicReportMetricRequest } from "sanka-sdk/models";

let value: PublicReportMetricRequest = {
  metric: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `role`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `name`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `metric`              | *string*              | :heavy_check_mark:    | N/A                   |
| `metricType`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `order`               | *number*              | :heavy_minus_sign:    | N/A                   |
| `filter`              | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `dataSource`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `sort`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `metaData`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `rawSql`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `displayResult`       | *string*              | :heavy_minus_sign:    | N/A                   |