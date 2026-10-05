# GetPublicGoalProgress200Envelope

## Example Usage

```typescript
import { GetPublicGoalProgress200Envelope } from "sanka-sdk/models";

let value: GetPublicGoalProgress200Envelope = {
  success: true,
  data: {
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
    asOf: new Date("2024-11-15"),
    fiscalYear: 551695,
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
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.GoalProgressData](../models/goal-progress-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |