# GetPublicGoalProgressResponse

## Example Usage

```typescript
import { GetPublicGoalProgressResponse } from "sanka-sdk/models/operations";

let value: GetPublicGoalProgressResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.GetPublicGoalProgress200Envelope](../../models/get-public-goal-progress200-envelope.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |