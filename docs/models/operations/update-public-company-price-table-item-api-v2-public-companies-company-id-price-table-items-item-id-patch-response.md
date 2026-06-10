# UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchResponse

## Example Usage

```typescript
import {
  UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchResponse =
    {
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
| `result`                                                                                                                                                                                                                                            | [models.UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch200Envelope](../../models/update-public-company-price-table-item-api-v2-public-companies-company-id-price-table-items-item-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                 |