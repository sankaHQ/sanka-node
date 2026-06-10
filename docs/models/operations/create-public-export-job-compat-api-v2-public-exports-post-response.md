# CreatePublicExportJobCompatApiV2PublicExportsPostResponse

## Example Usage

```typescript
import { CreatePublicExportJobCompatApiV2PublicExportsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicExportJobCompatApiV2PublicExportsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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
| `result`                                                                                                                                                      | [models.CreatePublicExportJobCompatApiV2PublicExportsPost200Envelope](../../models/create-public-export-job-compat-api-v2-public-exports-post200-envelope.md) | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |