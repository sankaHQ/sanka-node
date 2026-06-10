# UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPutResponse

## Example Usage

```typescript
import { UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.UpdatePublicCompanyApiV2PublicCompaniesCompanyIdPut200Envelope](../../models/update-public-company-api-v2-public-companies-company-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |