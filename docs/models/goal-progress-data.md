# GoalProgressData

## Example Usage

```typescript
import { GoalProgressData } from "sanka-sdk/models";

let value: GoalProgressData = {
  goal: {
    id: "ec73ee6e-4e13-4d66-91d4-4e1cb08d7334",
    name: "<value>",
    metric: "invoice_revenue",
    unit: "number",
    source: "<value>",
    definition: {
      source: "<value>",
    },
    amount: "including_tax",
    currency: "Boliviano boliviano",
    assignment: "company_and_people",
    assignees: [
      {
        id: 49341,
        label: "<value>",
      },
    ],
    version: 378647,
    archived: true,
    createdAt: new Date("2025-08-09T15:20:47.898Z"),
    updatedAt: new Date("2025-05-16T00:33:09.752Z"),
  },
  subject: "<value>",
  owner: {
    id: 872426,
    label: "<value>",
  },
  asOf: new Date("2024-10-21"),
  fiscalYear: 855056,
  months: [],
  periods: [
    {
      key: "quarter",
      start: new Date("2024-06-07"),
      end: new Date("2026-09-12"),
      actual: "<value>",
      target: "<value>",
      expected: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `goal`                                                           | [models.GoalData](../models/goal-data.md)                        | :heavy_check_mark:                                               | N/A                                                              |
| `subject`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `owner`                                                          | [models.GoalOwner](../models/goal-owner.md)                      | :heavy_check_mark:                                               | N/A                                                              |
| `asOf`                                                           | [Date](../types/rfcdate.md)                                      | :heavy_check_mark:                                               | N/A                                                              |
| `fiscalYear`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `months`                                                         | [models.GoalMonthPoint](../models/goal-month-point.md)[]         | :heavy_check_mark:                                               | N/A                                                              |
| `periods`                                                        | [models.GoalPeriodProgress](../models/goal-period-progress.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `peoplePeriod`                                                   | [models.PeoplePeriod](../models/people-period.md)                | :heavy_minus_sign:                                               | N/A                                                              |
| `people`                                                         | [models.GoalPersonProgress](../models/goal-person-progress.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `excludedRecords`                                                | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |