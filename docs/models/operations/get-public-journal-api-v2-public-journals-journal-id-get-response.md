# GetPublicJournalApiV2PublicJournalsJournalIdGetResponse

## Example Usage

```typescript
import { GetPublicJournalApiV2PublicJournalsJournalIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicJournalApiV2PublicJournalsJournalIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.GetPublicJournalApiV2PublicJournalsJournalIdGet200Envelope](../../models/get-public-journal-api-v2-public-journals-journal-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |