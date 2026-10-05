# DeletePublicGoalResponse

## Example Usage

```typescript
import { DeletePublicGoalResponse } from "sanka-sdk/models/operations";

let value: DeletePublicGoalResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "3c9592e3-a71b-48c4-9e39-baba72c5ce8a",
      name: "<value>",
      metric: "deals_created",
      unit: "count",
      source: "<value>",
      definition: {
        source: "<value>",
      },
      amount: "including_tax",
      currency: "Somali Shilling",
      assignment: "people",
      assignees: [],
      version: 869268,
      archived: false,
      createdAt: new Date("2024-09-24T03:57:44.142Z"),
      updatedAt: new Date("2026-07-05T22:21:09.974Z"),
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [models.DeletePublicGoal200Envelope](../../models/delete-public-goal200-envelope.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |