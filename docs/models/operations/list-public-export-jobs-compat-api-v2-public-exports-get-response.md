# ListPublicExportJobsCompatApiV2PublicExportsGetResponse

## Example Usage

```typescript
import { ListPublicExportJobsCompatApiV2PublicExportsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicExportJobsCompatApiV2PublicExportsGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.ListPublicExportJobsCompatApiV2PublicExportsGet200Envelope](../../models/list-public-export-jobs-compat-api-v2-public-exports-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |