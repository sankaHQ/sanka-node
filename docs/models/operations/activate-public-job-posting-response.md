# ActivatePublicJobPostingResponse

## Example Usage

```typescript
import { ActivatePublicJobPostingResponse } from "sanka-sdk/models/operations";

let value: ActivatePublicJobPostingResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `headers`                                                                                             | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `result`                                                                                              | [models.ActivatePublicJobPosting200Envelope](../../models/activate-public-job-posting200-envelope.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |