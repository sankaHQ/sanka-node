# CreatePublicAbsenceApiV2PublicAbsencesPostResponse

## Example Usage

```typescript
import { CreatePublicAbsenceApiV2PublicAbsencesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicAbsenceApiV2PublicAbsencesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.CreatePublicAbsenceApiV2PublicAbsencesPost200Envelope](../../models/create-public-absence-api-v2-public-absences-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |