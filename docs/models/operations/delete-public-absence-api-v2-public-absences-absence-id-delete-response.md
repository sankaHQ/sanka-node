# DeletePublicAbsenceApiV2PublicAbsencesAbsenceIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicAbsenceApiV2PublicAbsencesAbsenceIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicAbsenceApiV2PublicAbsencesAbsenceIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.DeletePublicAbsenceApiV2PublicAbsencesAbsenceIdDelete200Envelope](../../models/delete-public-absence-api-v2-public-absences-absence-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |