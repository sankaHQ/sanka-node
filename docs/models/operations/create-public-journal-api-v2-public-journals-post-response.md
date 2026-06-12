# CreatePublicJournalApiV2PublicJournalsPostResponse

## Example Usage

```typescript
import { CreatePublicJournalApiV2PublicJournalsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicJournalApiV2PublicJournalsPostResponse = {
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
| `result`                                                                                                                                      | [models.CreatePublicJournalApiV2PublicJournalsPost200Envelope](../../models/create-public-journal-api-v2-public-journals-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |