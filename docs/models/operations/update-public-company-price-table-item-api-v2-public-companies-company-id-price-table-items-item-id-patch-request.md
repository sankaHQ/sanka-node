# UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchRequest

## Example Usage

```typescript
import {
  UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatchRequest =
    {
      companyId: "<id>",
      itemId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `itemId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `xWorkspaceCode`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `body`                                                                                               | [models.CompanyPriceTableItemUpdateRequest](../../models/company-price-table-item-update-request.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |