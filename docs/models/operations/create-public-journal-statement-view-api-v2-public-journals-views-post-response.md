# CreatePublicJournalStatementViewApiV2PublicJournalsViewsPostResponse

## Example Usage

```typescript
import { CreatePublicJournalStatementViewApiV2PublicJournalsViewsPostResponse } from "sanka-sdk/models/operations";

let value:
  CreatePublicJournalStatementViewApiV2PublicJournalsViewsPostResponse = {
    headers: {
      "key": [],
      "key1": [],
      "key2": [
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                            | Record<string, *string*[]>                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `result`                                                                                                                                                                             | [models.CreatePublicJournalStatementViewApiV2PublicJournalsViewsPost200Envelope](../../models/create-public-journal-statement-view-api-v2-public-journals-views-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |