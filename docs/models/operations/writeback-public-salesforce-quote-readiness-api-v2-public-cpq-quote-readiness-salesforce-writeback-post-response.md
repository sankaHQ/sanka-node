# WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPostResponse

## Example Usage

```typescript
import {
  WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPostResponse,
} from "sanka-sdk/models/operations";

let value:
  WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
        "key2": [],
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

| Field                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                 |
| `result`                                                                                                                                                                                                                                            | [models.WritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost200Envelope](../../models/writeback-public-salesforce-quote-readiness-api-v2-public-cpq-quote-readiness-salesforce-writeback-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                 |