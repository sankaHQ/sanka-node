# GetPublicApplicantResponse

## Example Usage

```typescript
import { GetPublicApplicantResponse } from "sanka-sdk/models/operations";

let value: GetPublicApplicantResponse = {
  headers: {
    "key": [],
    "key1": [],
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
| `result`                                                                                 | [models.GetPublicApplicant200Envelope](../../models/get-public-applicant200-envelope.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |