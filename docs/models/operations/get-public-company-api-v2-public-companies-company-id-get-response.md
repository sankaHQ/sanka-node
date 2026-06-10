# GetPublicCompanyApiV2PublicCompaniesCompanyIdGetResponse

## Example Usage

```typescript
import { GetPublicCompanyApiV2PublicCompaniesCompanyIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicCompanyApiV2PublicCompaniesCompanyIdGetResponse = {
  headers: {
    "key": [],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                  | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `result`                                                                                                                                                    | [models.GetPublicCompanyApiV2PublicCompaniesCompanyIdGet200Envelope](../../models/get-public-company-api-v2-public-companies-company-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |