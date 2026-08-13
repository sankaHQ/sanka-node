# SetPublicWorkforcePositionJobResponse

## Example Usage

```typescript
import { SetPublicWorkforcePositionJobResponse } from "sanka-sdk/models/operations";

let value: SetPublicWorkforcePositionJobResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [models.SetPublicWorkforcePositionJob200Envelope](../../models/set-public-workforce-position-job200-envelope.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |