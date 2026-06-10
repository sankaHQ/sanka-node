# GetPublicExportJobCompatApiV2PublicExportsJobIdGetResponse

## Example Usage

```typescript
import { GetPublicExportJobCompatApiV2PublicExportsJobIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicExportJobCompatApiV2PublicExportsJobIdGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.GetPublicExportJobCompatApiV2PublicExportsJobIdGet200Envelope](../../models/get-public-export-job-compat-api-v2-public-exports-job-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |