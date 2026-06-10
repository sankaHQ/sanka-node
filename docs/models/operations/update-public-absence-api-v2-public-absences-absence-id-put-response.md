# UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutResponse

## Example Usage

```typescript
import { UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPut200Envelope](../../models/update-public-absence-api-v2-public-absences-absence-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |