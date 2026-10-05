# GoalDetailData

## Example Usage

```typescript
import { GoalDetailData } from "sanka-sdk/models";

let value: GoalDetailData = {
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
  fiscalYear: 363133,
  fiscalYearStartMonth: 531848,
  months: [
    new Date("2025-09-25"),
  ],
  rows: [
    {
      owner: {
        id: 872426,
        label: "<value>",
      },
      targets: [
        "<value 1>",
      ],
    },
  ],
  canEdit: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `goal`                                                 | [models.GoalData](../models/goal-data.md)              | :heavy_check_mark:                                     | N/A                                                    |
| `fiscalYear`                                           | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `fiscalYearStartMonth`                                 | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `months`                                               | [Date](../types/rfcdate.md)[]                          | :heavy_check_mark:                                     | N/A                                                    |
| `rows`                                                 | [models.GoalTargetRow](../models/goal-target-row.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `canEdit`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |