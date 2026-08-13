# GetPublicInterviewResponse

## Example Usage

```typescript
import { GetPublicInterviewResponse } from "sanka-sdk/models/operations";

let value: GetPublicInterviewResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [models.GetPublicInterview200Envelope](../../models/get-public-interview200-envelope.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |