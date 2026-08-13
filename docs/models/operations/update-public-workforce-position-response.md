# UpdatePublicWorkforcePositionResponse

## Example Usage

```typescript
import { UpdatePublicWorkforcePositionResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicWorkforcePositionResponse = {
  headers: {},
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
| `result`                                                                                                        | [models.UpdatePublicWorkforcePosition200Envelope](../../models/update-public-workforce-position200-envelope.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |