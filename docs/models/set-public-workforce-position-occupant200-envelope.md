# SetPublicWorkforcePositionOccupant200Envelope

## Example Usage

```typescript
import { SetPublicWorkforcePositionOccupant200Envelope } from "sanka-sdk/models";

let value: SetPublicWorkforcePositionOccupant200Envelope = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`                                                            | *true*                                                               | :heavy_check_mark:                                                   | N/A                                                                  |
| `data`                                                               | [models.WorkforcePositionData](../models/workforce-position-data.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `meta`                                                               | [models.EnvelopeMeta](../models/envelope-meta.md)                    | :heavy_check_mark:                                                   | N/A                                                                  |