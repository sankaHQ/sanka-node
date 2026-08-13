# CreatePublicWorkforcePositionResponse

## Example Usage

```typescript
import { CreatePublicWorkforcePositionResponse } from "sanka-sdk/models/operations";

let value: CreatePublicWorkforcePositionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      displayId: 187763,
      title: "<value>",
      planningStatus: "approved",
      staffingPhase: "recruiting",
      version: 430079,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [models.CreatePublicWorkforcePosition200Envelope](../../models/create-public-workforce-position200-envelope.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |