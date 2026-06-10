# GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGetResponse

## Example Usage

```typescript
import { GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGetResponse } from "sanka-sdk/models/operations";

let value:
  GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGetResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key2": [],
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

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                                | [models.GetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet200Envelope](../../models/get-public-company-price-table-api-v2-public-companies-company-id-price-table-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |