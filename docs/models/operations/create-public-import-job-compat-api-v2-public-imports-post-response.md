# CreatePublicImportJobCompatApiV2PublicImportsPostResponse

## Example Usage

```typescript
import { CreatePublicImportJobCompatApiV2PublicImportsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicImportJobCompatApiV2PublicImportsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
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

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                    | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `result`                                                                                                                                                      | [models.CreatePublicImportJobCompatApiV2PublicImportsPost200Envelope](../../models/create-public-import-job-compat-api-v2-public-imports-post200-envelope.md) | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |