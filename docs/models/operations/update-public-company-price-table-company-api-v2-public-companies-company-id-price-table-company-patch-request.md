# UpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatchRequest

## Example Usage

```typescript
import {
  UpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatchRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatchRequest =
    {
      companyId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `workspaceId`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `xWorkspaceCode`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `body`                                                                                                     | [models.CompanyPriceTableCompanyUpdateRequest](../../models/company-price-table-company-update-request.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |