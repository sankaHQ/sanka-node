# CreatePublicReportApiV2PublicReportsPostResponse

## Example Usage

```typescript
import { CreatePublicReportApiV2PublicReportsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicReportApiV2PublicReportsPostResponse = {
  headers: {},
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.CreatePublicReportApiV2PublicReportsPost200Envelope](../../models/create-public-report-api-v2-public-reports-post200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |