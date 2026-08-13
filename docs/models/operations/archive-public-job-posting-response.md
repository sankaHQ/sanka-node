# ArchivePublicJobPostingResponse

## Example Usage

```typescript
import { ArchivePublicJobPostingResponse } from "sanka-sdk/models/operations";

let value: ArchivePublicJobPostingResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [models.ArchivePublicJobPosting200Envelope](../../models/archive-public-job-posting200-envelope.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |