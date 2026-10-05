# GoalListItem

## Example Usage

```typescript
import { GoalListItem } from "sanka-sdk/models";

let value: GoalListItem = {
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
  thisMonth: {
    key: "year",
    start: new Date("2026-06-17"),
    end: new Date("2026-01-01"),
    actual: "<value>",
    target: "<value>",
    expected: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `goal`                                                         | [models.GoalData](../models/goal-data.md)                      | :heavy_check_mark:                                             | N/A                                                            |
| `thisMonth`                                                    | [models.GoalPeriodProgress](../models/goal-period-progress.md) | :heavy_check_mark:                                             | N/A                                                            |