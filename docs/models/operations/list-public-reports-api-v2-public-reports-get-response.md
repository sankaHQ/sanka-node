# ListPublicReportsApiV2PublicReportsGetResponse

## Example Usage

```typescript
import { ListPublicReportsApiV2PublicReportsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicReportsApiV2PublicReportsGetResponse = {
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
    "key2": [
      "<value 1>",
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

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                             | Record<string, *string*[]>                                                                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `result`                                                                                                                              | [models.ListPublicReportsApiV2PublicReportsGet200Envelope](../../models/list-public-reports-api-v2-public-reports-get200-envelope.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |