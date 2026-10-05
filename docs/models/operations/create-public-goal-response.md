# CreatePublicGoalResponse

## Example Usage

```typescript
import { CreatePublicGoalResponse } from "sanka-sdk/models/operations";

let value: CreatePublicGoalResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
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
| `result`                                                                             | [models.CreatePublicGoal201Envelope](../../models/create-public-goal201-envelope.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |