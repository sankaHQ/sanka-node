# SetPublicGoalTargets200Envelope

## Example Usage

```typescript
import { SetPublicGoalTargets200Envelope } from "sanka-sdk/models";

let value: SetPublicGoalTargets200Envelope = {
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
    fiscalYear: 57443,
    fiscalYearStartMonth: 638636,
    months: [
      new Date("2026-11-20"),
      new Date("2026-05-05"),
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
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `success`                                              | *true*                                                 | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [models.GoalDetailData](../models/goal-detail-data.md) | :heavy_check_mark:                                     | N/A                                                    |
| `meta`                                                 | [models.EnvelopeMeta](../models/envelope-meta.md)      | :heavy_check_mark:                                     | N/A                                                    |