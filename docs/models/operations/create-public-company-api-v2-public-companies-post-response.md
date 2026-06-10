# CreatePublicCompanyApiV2PublicCompaniesPostResponse

## Example Usage

```typescript
import { CreatePublicCompanyApiV2PublicCompaniesPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicCompanyApiV2PublicCompaniesPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
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

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                       | Record<string, *string*[]>                                                                                                                      | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |
| `result`                                                                                                                                        | [models.CreatePublicCompanyApiV2PublicCompaniesPost200Envelope](../../models/create-public-company-api-v2-public-companies-post200-envelope.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |