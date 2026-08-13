# ArchivePublicInterviewResponse

## Example Usage

```typescript
import { ArchivePublicInterviewResponse } from "sanka-sdk/models/operations";

let value: ArchivePublicInterviewResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [models.ArchivePublicInterview200Envelope](../../models/archive-public-interview200-envelope.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |