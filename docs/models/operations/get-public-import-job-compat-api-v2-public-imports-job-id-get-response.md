# GetPublicImportJobCompatApiV2PublicImportsJobIdGetResponse

## Example Usage

```typescript
import { GetPublicImportJobCompatApiV2PublicImportsJobIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicImportJobCompatApiV2PublicImportsJobIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
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
| `result`                                                                                                                                                          | [models.GetPublicImportJobCompatApiV2PublicImportsJobIdGet200Envelope](../../models/get-public-import-job-compat-api-v2-public-imports-job-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |