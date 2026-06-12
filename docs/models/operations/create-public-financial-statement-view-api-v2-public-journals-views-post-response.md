# CreatePublicFinancialStatementViewApiV2PublicJournalsViewsPostResponse

## Example Usage

```typescript
import { CreatePublicFinancialStatementViewApiV2PublicJournalsViewsPostResponse } from "sanka-sdk/models/operations";

let value:
  CreatePublicFinancialStatementViewApiV2PublicJournalsViewsPostResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
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

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `result`                                                                                                                                                                                 | [models.CreatePublicFinancialStatementViewApiV2PublicJournalsViewsPost200Envelope](../../models/create-public-financial-statement-view-api-v2-public-journals-views-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |