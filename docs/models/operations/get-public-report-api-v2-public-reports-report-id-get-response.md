# GetPublicReportApiV2PublicReportsReportIdGetResponse

## Example Usage

```typescript
import { GetPublicReportApiV2PublicReportsReportIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicReportApiV2PublicReportsReportIdGetResponse = {
  headers: {
    "key": [],
    "key1": [
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.GetPublicReportApiV2PublicReportsReportIdGet200Envelope](../../models/get-public-report-api-v2-public-reports-report-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |