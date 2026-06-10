# CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPostResponse

## Example Usage

```typescript
import { CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPostResponse } from "sanka-sdk/models/operations";

let value:
  CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPostResponse = {
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

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `result`                                                                                                                                                                               | [models.CancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost200Envelope](../../models/cancel-public-export-job-compat-api-v2-public-exports-job-id-cancel-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |