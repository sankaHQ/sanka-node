# ListPublicAbsencesApiV2PublicAbsencesGetResponse

## Example Usage

```typescript
import { ListPublicAbsencesApiV2PublicAbsencesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicAbsencesApiV2PublicAbsencesGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      objectType: "<value>",
      view: {},
      columns: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      page: 649857,
      pageSize: 653504,
      total: 801424,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicAbsencesApiV2PublicAbsencesGet200Envelope](../../models/list-public-absences-api-v2-public-absences-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |