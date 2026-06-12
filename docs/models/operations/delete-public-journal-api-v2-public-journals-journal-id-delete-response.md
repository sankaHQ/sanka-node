# DeletePublicJournalApiV2PublicJournalsJournalIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicJournalApiV2PublicJournalsJournalIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicJournalApiV2PublicJournalsJournalIdDeleteResponse = {
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
| `result`                                                                                                                                                              | [models.DeletePublicJournalApiV2PublicJournalsJournalIdDelete200Envelope](../../models/delete-public-journal-api-v2-public-journals-journal-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |