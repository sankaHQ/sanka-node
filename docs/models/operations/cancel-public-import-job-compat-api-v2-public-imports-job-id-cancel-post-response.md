# CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPostResponse

## Example Usage

```typescript
import { CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPostResponse } from "sanka-sdk/models/operations";

let value:
  CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPostResponse = {
    headers: {
      "key": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      "key1": [
        "<value 1>",
      ],
    },
    result: {
      success: true,
      data: {},
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
| `result`                                                                                                                                                                               | [models.CancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost200Envelope](../../models/cancel-public-import-job-compat-api-v2-public-imports-job-id-cancel-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |