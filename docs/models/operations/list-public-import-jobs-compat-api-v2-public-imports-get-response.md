# ListPublicImportJobsCompatApiV2PublicImportsGetResponse

## Example Usage

```typescript
import { ListPublicImportJobsCompatApiV2PublicImportsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicImportJobsCompatApiV2PublicImportsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.ListPublicImportJobsCompatApiV2PublicImportsGet200Envelope](../../models/list-public-import-jobs-compat-api-v2-public-imports-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |