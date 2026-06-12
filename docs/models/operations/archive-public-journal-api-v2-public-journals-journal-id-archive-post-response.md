# ArchivePublicJournalApiV2PublicJournalsJournalIdArchivePostResponse

## Example Usage

```typescript
import { ArchivePublicJournalApiV2PublicJournalsJournalIdArchivePostResponse } from "sanka-sdk/models/operations";

let value: ArchivePublicJournalApiV2PublicJournalsJournalIdArchivePostResponse =
  {
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
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `result`                                                                                                                                                                           | [models.ArchivePublicJournalApiV2PublicJournalsJournalIdArchivePost200Envelope](../../models/archive-public-journal-api-v2-public-journals-journal-id-archive-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |