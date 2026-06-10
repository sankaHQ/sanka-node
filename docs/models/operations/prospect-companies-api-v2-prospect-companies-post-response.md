# ProspectCompaniesApiV2ProspectCompaniesPostResponse

## Example Usage

```typescript
import { ProspectCompaniesApiV2ProspectCompaniesPostResponse } from "sanka-sdk/models/operations";

let value: ProspectCompaniesApiV2ProspectCompaniesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      parsedFilters: {},
      count: 623164,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                      | Record<string, *string*[]>                                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `result`                                                                                                                                       | [models.ProspectCompaniesApiV2ProspectCompaniesPost200Envelope](../../models/prospect-companies-api-v2-prospect-companies-post200-envelope.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |