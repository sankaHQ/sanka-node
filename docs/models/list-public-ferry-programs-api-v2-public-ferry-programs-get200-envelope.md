# ListPublicFerryProgramsApiV2PublicFerryProgramsGet200Envelope

## Example Usage

```typescript
import { ListPublicFerryProgramsApiV2PublicFerryProgramsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicFerryProgramsApiV2PublicFerryProgramsGet200Envelope = {
  success: true,
  data: {
    programs: [],
    count: 667962,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `success`                                                           | *true*                                                              | :heavy_check_mark:                                                  | N/A                                                                 |
| `data`                                                              | [models.FerryProgramListData](../models/ferry-program-list-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `meta`                                                              | [models.EnvelopeMeta](../models/envelope-meta.md)                   | :heavy_check_mark:                                                  | N/A                                                                 |